import { v4 as uuid4 } from 'uuid'
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback]=useState([])
    const [isloading, setIsloading]=useState(true) 

    const [feedbackEdit,setFeedbackEdit] = useState({
        item:{},
        edit:false
    })

    useEffect(()=>{
fetchFeedback()
    },[])

    //fetch feedback
    const fetchFeedback = async()=>{
        const response =await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsloading(false)
        
    }

 
    //add feedback
const addFeedback = async(newFeedback) => {
    const response = await fetch('/feedback', 
    {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(newFeedback)
    })
    const data = await response.json()
        newFeedback.id = uuid4()
        setFeedback([data, ...feedback])
    
    }

    //delete feedback
const deleteFeedback =async (id)=>{
    if(window.confirm ('are u sure u want to delete?')){
        await fetch(`/feedback/${id}`,{method:'DELETE'})
        setFeedback(feedback.filter((item) =>item.id!==id))
    } 
}

//update feedback item
const updateFeedback =async (id, updItem) =>{
   const response = await fetch(`/feedback/${id}`,
   {
   method:'PUT',
   headers:{'Content-Type':'application/json'}, 
   body: JSON.stringify(updItem)
})
const data =await response.json()
    setFeedback(feedback.map((item)=>(item.id===id ? {...item, ...data} : item)))
      
}







//set update item
   const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }





    return(
        <FeedbackContext.Provider value={
            {feedback, addFeedback, editFeedback, isloading, feedbackEdit, deleteFeedback, updateFeedback,}
    }>{children}</FeedbackContext.Provider>
        
    )
}

export default FeedbackContext
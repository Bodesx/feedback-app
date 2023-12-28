import{BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList  from './components/feedbackList'
import FeedbackStats  from './components/feedbackStats'
import FeedbackForm  from './components/feedbackForm'
import About from './pages/About'
import AboutIcon from './components/AboutIcon'
import { FeedbackProvider } from './context/FeedbackContext'



function App () {

    return (
        <FeedbackProvider>

       
        <Router> 
         <Header/>
         
        <div className='container'> 
        <Routes>
             <Route exact path='/' element={

           <>
           <FeedbackForm />
          <FeedbackStats />
          <FeedbackList /> 
         
          </>
             }></Route>

    <Route path='/about' element={<About/>}/> 
     </Routes>

    <AboutIcon/>
          </div>   

          
   </Router>
 </FeedbackProvider>
   )

}

export default App 
 
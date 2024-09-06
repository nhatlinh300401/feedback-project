import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackProvider>
      <Router>
          <div className="container">

            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm handleAdd={addFeedback}/>
                  <FeedbackStats feedbacks={feedback} />
                  <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback}/>
                </>
              }></Route>

              <Route path='/about' element={<AboutPage />} />
            </Routes>

            <AboutIconLink />
          </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

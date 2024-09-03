import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import Header from './components/Header';

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
    <div className="container">
      <Header text={"Feedback App"}/>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedbacks={feedback} />
      <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback}/>
    </div>
  );
}

export default App;

import { useState } from "react";
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <div className="container">
      <FeedbackForm />
      <FeedbackStats feedbacks={feedback} />
      <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback}/>
    </div>
  );
}

export default App;

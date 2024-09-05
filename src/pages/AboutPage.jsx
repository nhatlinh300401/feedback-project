import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
          <h1>About This Project</h1>
          <p>This is a Feedback Management App using React</p>
          <p>Version: 1.0.0</p>

          <p>
            <Link to='/'>Back To Home</Link>
          </p>
      </div>
    </Card>
  )
}

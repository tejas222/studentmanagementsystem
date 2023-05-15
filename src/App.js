import logo from './logo.svg';
import './App.css';
import StudentDashboard from "./componenets/student/StudentDashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container vh-100 bg-light">
      <StudentDashboard />
    </div>
  );
}

export default App;

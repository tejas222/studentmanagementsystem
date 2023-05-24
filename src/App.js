
import './App.css';
import StudentDashboard from "./componenets/student/StudentDashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TeacherDashboard from './componenets/teacher/TeacherDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
        </Routes>
      </Router>



    </>
  );
}

export default App;

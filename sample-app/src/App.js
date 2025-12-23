
import { useState } from "react";
import StudentForm from "./components/Forms/StudentForm";
import StudentList from "./components/Forms/StudentList";

function App(){

  const[students, setStudents] = useState([]);

  const addStudent = (student)=>{
    setStudents([...students, student])
  }

  return(
    <div>
    <StudentForm onAddStudent = {addStudent}/>
    <StudentList students = {students}/>
    </div>
  )
}

export default App;



function StudentList({students}){

    if(students.length === 0){
        return (
            <>
            <p>No Students added yet</p>
            </>
        )
    }
    return(

        
        <>
        <ul>
            {students.map((student , index)=>(
            <li key={index}>{student.name}- {student.grade}</li>
        ))}
        </ul>
        </>
    )
}

export default StudentList;
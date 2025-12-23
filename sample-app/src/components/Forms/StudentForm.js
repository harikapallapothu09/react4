import { useState } from "react";


function StudentForm({ onAddStudent }) {

    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddStudent({ name, grade })

        setName("");
        setGrade("");

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter the student Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter the grade of the Student" value={grade} onChange={(e) => setGrade(e.target.value)} />

                <button type="submit" >Submit</button>
            </form>

        </>
    )
}

export default StudentForm;
import { useState } from 'react';
import BasicForm from '../Components/basicForm';
import { selectoreValue } from '../rtk/Reducers';
import { addTask,editTask,removeTask } from '../rtk/Reducers';
import { useDispatch, useSelector } from 'react-redux';

function StudentList(){
    const students = useSelector(state=>state.students.students);
    const [selectedStudent,setSelectedStudent] = useState(null);
    const dispatch = useDispatch();

    const handleEdit = (student)=>{
        setSelectedStudent(student);
    }
    const handleRemove = (id)=>{
        dispatch(removeTask(id));
    }

    return(
        <>  
            <BasicForm selectedStudent={selectedStudent} setSelectedStudent ={setSelectedStudent} />
            {students.map(student =>(
                <ul key={student.id}>
                    <li>{student.Name}</li>
                    <li>{student.Department}</li>
                    <button onClick={()=>handleEdit(student)}>Edit</button>
                    <button onClick={()=>handleRemove(student.id)}>Remove</button>
                </ul>
            ))}
        </>
    )
}


export default StudentList;
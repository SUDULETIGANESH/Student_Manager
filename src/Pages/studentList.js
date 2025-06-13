import { useState } from 'react';
import BasicForm from '../Components/basicForm';
import { removeTask } from '../rtk/Reducers';
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
                    <li>{student.Year}</li>
                    <button onClick={()=>handleEdit(student)}>Edit</button>
                    <button onClick={()=>handleRemove(student.id)}>Remove</button>
                </ul>
            ))}

            {/* <div className="max-w-md mx-auto space-y-4">
                {students.map((student) => (
                    <div key={student.id} className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-bold text-gray-800">{student.Name}</h2>
                    <p className="text-gray-600">{student.Department}</p>
                    <p className="text-gray-600">{student.Year}</p>
                    <button className="text-gray-600" onClick={()=>handleEdit(student)} >Edit</button>
                    <button className="text-gray-600" onClick={()=>handleRemove(student.id)} >Remove</button>
                    </div>
                ))}
            </div> */}
        </>
    )
}


export default StudentList;
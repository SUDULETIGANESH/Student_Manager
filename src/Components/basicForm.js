import { useEffect, useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../rtk/Reducers';


function BasicForm({selectedStudent,setSelectedStudent}){
    const [name,setName] = useState('');
    const [department,setDepartment] = useState('');
    const inputValue = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        inputValue.current.focus();
    },[])

    useEffect(()=>{
        if(selectedStudent){
            setName(selectedStudent.Name);
            setDepartment(selectedStudent.Department);
        }  
    },[selectedStudent]);

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(selectedStudent){
            dispatch(editTask({id:selectedStudent.id , name, department}))
            setSelectedStudent(null);
        }
        else{
            dispatch(addTask({name,department}));
        }
        setName('')
        setDepartment('')  
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    ref={inputValue}
                    placeholder="Name"
                    onChange = {e => {setName(e.target.value)}}
                />
                <input
                    type="text"
                    value={department}
                    placeholder="Department"
                    onChange = {e => {setDepartment(e.target.value)}}
                />
                <button type='submit'>{selectedStudent?"Edit Student":"Add Student"}</button>
            </form>
           
        </>
    )
}

export default BasicForm;
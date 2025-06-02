import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    students:[
        {id:1,Name:"Ganesh",Department:"CSE"},
        {id:2,Name:"Mahesh",Department:"CSE"}
    ]
}

const studentReducer = createSlice({
    name : 'students',
    initialState,
    reducers:{
        addTask(state,action){
            const {name,department} = action.payload;
            console.log(name,department);
            state.students.push({
                id: nanoid(),
                Name:name,
                Department:department,
            });
            console.log(state.students);
        },
        removeTask(state,action){
            state.students = state.students.filter(student => student.id !== action.payload);
        },
        editTask(state,action){
           const {id,name,department} = action.payload;
           const existingStudent = state.students.find(student => student.id === id);
           if(existingStudent){
            existingStudent.Name = name;
            existingStudent.Department = department;
           }
        },
    },
    
});

export const {addTask,removeTask,editTask}  = studentReducer.actions;

export default studentReducer.reducer;

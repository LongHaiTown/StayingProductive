import ControlPanel from './ControlPanel.js';
import Thing from './Thing.js';
import './AppFunctionSection.css'

import { workData } from './database.js';

import React, { useState,useEffect } from "react";

const AppFunctionSection = ({setSharedData}) => {
    const [todoList, setToDoList] = useState(workData);

    useEffect(() => {
        setSharedData(todoList);
    },);


    const todoListComp = todoList.map((toDo)=> (
        <Thing
            key = {toDo.key  }
            title={toDo.title}
            Description={toDo.Description}
            definedSchedule={toDo.definedSchedule}
        />
    ))


    const handleAdd = (newItem) => {
        setToDoList([...todoList, newItem]);
        setSharedData([...todoList, newItem]);
    };

    return (
        <div className='app-function'>

        <ControlPanel handleAdd={handleAdd}/>
        
        <div className='todo-list'>
        {todoListComp}
        </div>

      </div>
    )
};
export default AppFunctionSection; 
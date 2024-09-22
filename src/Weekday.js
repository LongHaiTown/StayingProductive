import Specificday from "./Specificday";
import Thing_Scheduled from "./Things_Scheduled";

import React, { useState, useEffect } from "react";

const Weekday= ({ thingstodo }) => {
    const [things, setThings] = useState([]);
    useEffect(() => {
        setThings(thingstodo);
    }, [thingstodo]);


    var fullList= [];

    things.forEach(thing => {
        for(let i= 0;i<thing.count; i++){
            fullList.push({...thing})
        }
    });
    for (let i = fullList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fullList[i], fullList[j]] = [fullList[j], fullList[i]]; // Hoán đổi
    }
    console.log(fullList);
    var i,j;
    const todoListComp = fullList.map((toDo)=> (
        <Thing_Scheduled
            key = {toDo.key}
            title={toDo.title}
            Description={toDo.Description}
            definedSchedule={toDo.definedSchedule}
            style={{
                height:"100%",
                width:"100%",
                marign:"0",
                padding:"0",
                backgroundColor:"None"
            }}
        />
    ));
    // for(i = 0; i< 7; i++){
    //     for (j =0; j<6; j++){
    //         todoListComp.push(
    //         <Thing_Scheduled
    //             key = {fullList[i][j].key}
    //             title={fullList[i][j].title}
    //             Description={fullList[i][j].Description}
    //             definedSchedule={fullList[i][j].definedSchedule}
    //             style={{
    //                 height:"100%",
    //                 width:"100%",
    //                 marign:"0",
    //                 padding:"0",
    //                 backgroundColor:"None"
    //             }}
    //         />
    //         )
    //     }
    // }

return ( <div id='scheduleMain'>

    {todoListComp}</div> );
}
export default Weekday;

import React, { useState, useContext, useEffect } from 'react'; 
import AppFunctionSection from './AppFunctionSection';
import { AppContext } from './AppFunctionSection';

const ControlPanel= ( {handleAdd}) => {

    const [titleInput, setTitleInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");

    const [defaulThing, setDefaulThing] = useState({
        key : Math.random(),
        title: "",
        Description: "",
        definedSchedule: []
    });

    function handleTitleInput(e){
        setTitleInput(e.target.value);
    }
    function handleDescriptionInput(e){
        setDescriptionInput(e.target.value);
    }
    function clearForm() {
        document.getElementById("addWorkForm").reset();
    }
    function handleSubmit(e) {
        alert("submit thanh cong")
        e.preventDefault();
        defaulThing.title=titleInput;
        defaulThing.Description=descriptionInput;
        handleAdd(defaulThing);
        clearForm();
        setDefaulThing({
        });
      }

    return (
        <div className='control-panel'>
            <form id="addWorkForm" onSubmit={handleSubmit}>
                <div className="form-text">
                    <h1> Add more Work</h1>  
                        <div className="text-input">
                            <label >Title</label> 
                            <input type="text" onChange={handleTitleInput} />
                        </div>

                        <div className="text-input">
                            <label >Description </label>      
                            <input type="text" onChange={handleDescriptionInput}  />
                        </div>
                </div>
                <div className="checkbox-input">


                    <input type="checkbox" id="mon-Morning" name="mon-Morning" value="Things"/>
                    <input type="checkbox" id="mon-Afternoon" name="mon-Afternoon" value="Things"/>
                    <input type="checkbox" id="mon-Evening" name="mon-Evening" value="Things"/>


                    <input type="checkbox" id="tue-Morning" name="tue-Morning" value="Things"/>
                    <input type="checkbox" id="tue-Afternoon" name="tue-Afternoon" value="Things"/>
                    <input type="checkbox" id="tue-Evening" name="tue-Evening" value="Things"/>


                    <input type="checkbox" id="wed-Morning" name="wed-Morning" value="Things"/>
                    <input type="checkbox" id="wed-Afternoon" name="wed-Afternoon" value="Things"/>
                    <input type="checkbox" id="wed-Evening" name="wed-Evening" value="Things"/>


                    <input type="checkbox" id="thu-Morning" name="thu-Morning" value="Things"/>
                    <input type="checkbox" id="thu-Afternoon" name="thu-Afternoon" value="Things"/>
                    <input type="checkbox" id="thu-Evening" name="thu-Evening" value="Things"/>


                    <input type="checkbox" id="fri-Morning" name="fri-Morning" value="Things"/>
                    <input type="checkbox" id="fri-Afternoon" name="fri-Afternoon" value="Things"/>
                    <input type="checkbox" id="fri-Evening" name="fri-Evening" value="Things"/>


                    <input type="checkbox" id="sat-Morning" name="sat-Morning" value="Things"/>
                    <input type="checkbox" id="sat-Afternoon" name="sat-Afternoon" value="Things"/>
                    <input type="checkbox" id="sat-Evening" name="sat-Evening" value="Things"/>


                    <input type="checkbox" id="sun-Morning" name="sun-Morning" value="Things"/>
                    <input type="checkbox" id="sun-Afternoon" name="sun-Afternoon" value="Things"/>
                    <input type="checkbox" id="sun-Evening" name="sun-Evening" value="Things"/>

                </div>
                <button type="submit" >Submit</button>     
            </form>
            </div>
    );
}




export default ControlPanel;

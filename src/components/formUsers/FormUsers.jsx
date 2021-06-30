import React,{useState,useContext} from 'react';
import { UsersContext } from '../../contexts/UsersContext';
import "./FormUsers.css"

const FormUsers = () => {

const [name, setName] = useState("");
const [desc, setDesc] = useState("");

const {addNewUser} = useContext(UsersContext);

    const handleFormData = (e) => {
        if(e.target.name === "userName"){
            setName(e.target.value)
        }
        if(e.target.name === "userDesc"){
            setDesc(e.target.value)
        }
    }


    const handleForm = (e) => {
        e.preventDefault();

        if(!name){
            alert("please create a user")
            return
        }

        addNewUser({name,desc});

        setName("");
        setDesc("");
    }

    
    return (
        <form className="formUsers" onSubmit={handleForm}>
            <div className="formUsers-row">
                <label htmlFor="userName" className="formUsers-label">user name</label>
                <input type="text" className="formUsers-input" id="userName" onChange={handleFormData} name="userName" value={name}/>
            </div>
            <div className="formUsers-row">
                <label htmlFor="userDesc" className="formUsers-label">description</label>
                <input className="formUsers-input formUsers-input--desc" id="userDesc" onChange={handleFormData} name="userDesc" value={desc}></input>
            </div>
            <button className="btn btn--submit">add user</button>
        </form>
    );
}

export default FormUsers;

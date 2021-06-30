import React,{useContext} from 'react';
import {UsersContext} from '../../contexts/UsersContext';
import "./DisplayUsers.css"

const DisplayUsers = () => {


    const {users,findDesc,handleDelete} = useContext(UsersContext);


    return (
        <ul className="users-list">
            {
                users.map( user => { 
                return (
                <li key={user.id} className="users-list__item">{user.name}
                <div>
                <button className="btn btn--list" onClick={() => handleDelete(user.id)}>delete</button>
                <button className="btn btn--list" onClick={() => findDesc(user.id)}>desciption</button>
                </div>
                </li>) 
            })
            }
        </ul>
    );
}

export default DisplayUsers;

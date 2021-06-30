import React,{useContext} from 'react';
import "./DisplayUsersDetails.css"
import { UsersContext } from '../../contexts/UsersContext';

const DisplayUsersDetails = () => {

    const {getedDesc,active} = useContext(UsersContext)

    return (
        <ul className="usersDetail-list">
                { active ? ( <li className="usersDetail-list__item">{getedDesc[0].desc}</li>
                        ) : (<li className="usersDetail-list__item">click on a user</li>)
                }
        </ul>
    );
}

export default DisplayUsersDetails;

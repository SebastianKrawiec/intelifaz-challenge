import React,{createContext,useState} from 'react';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {
    
const [users, setUsers] = useState([
    {id:0, name:"test-user", desc:"test description, test description"},
])

const [getedDesc, setGetedDesc] = useState([users]);
const [active, setActive] = useState(false);


const addNewUser = (addUser) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const addNewUser = {id, ...addUser};
    setUsers([...users, addNewUser])
}


const findDesc = (id) => {
    setGetedDesc( users.filter( user => user.id === id));
    setActive(!active);
}

const handleDelete = (id) => {
    setUsers(users.filter( user => user.id !== id));
    setActive(false)
}


    return (
        <UsersContext.Provider value={{
            users,
            addNewUser,
            findDesc,
            getedDesc,
            handleDelete,
            active
            }}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersContextProvider;

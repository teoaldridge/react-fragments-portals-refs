import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                    ...prevUsersList, 
                    { name: uName, age: uAge, id: Math.random().toString() }
                ];
        });
    };

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </React.Fragment>
    );
}

export default App;

//React Fragments explained: 
    //return(
        // <>
        // <h1> Hi there</h1>
        // <h2>This does not work</h2>
        // </>
        // )

    
    //this is the same as:

    //return(
        // <React.Fragment>
        // <h1> Hi there</h1>
        // <h2>This does not work</h2>
        // </React.Fragment>
        // )

    //React Fragment is an empty wrapper component: 
    //it doesn't render any real HTML element to the DOM. But it fulfills React's JSX requirement. 
    
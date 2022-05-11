import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Plase enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);

        //remember that you should rarely use refs to manipulate the DOM. Using this here is an exception!
        nameInputRef.current.value = '';
        ageInputRef.current.value = ''; 
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username' 
                        type='text' 
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        id='age' 
                        type='number' 
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>     
        </Wrapper>
    );
};

export default AddUser; 

//What do React Refs (References) Do? 
//Refs allow us to get acces to other DOM elements and work with them. 

//UseRefs are react hooks, so like all react hooks, 
//useRef(); can only be used inside of functional components. 

//How to Refs work?
//With Refs we can set up a connection between our html element that i being rendered in the end,
//and our other JavaScript code. 

//Controlled Vs Uncontrolled Components:

//Uncontrolled
//If you access values with a Ref you have Uncontrolled component.
//Those components are uncontrolled because their internal state 
//(the value which is reflected in them -the state of the input element in this case)
// is not controlled by React.

//Controlled
//We have Controlled Components whentheir internal state is controlled by React. 
// For example, when we use useState to change the internal value of components, 
//because useState is controlled by React. 

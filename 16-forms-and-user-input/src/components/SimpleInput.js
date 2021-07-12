import {useEffect, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameIsValid, setEenteredNameIsValid] = useState(false)
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    useEffect(()=> {
        if (enteredNameIsValid){
            console.log("Name Input is Valid!")
        }
    },[enteredNameIsValid])

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)

        if (event.target.value.trim() !== '') {
            setEenteredNameIsValid(true)
        }
    }

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true)
        if (enteredName.trim() === '') {
            setEenteredNameIsValid(false)
        }
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()

        setEnteredNameTouched(true)

        if (enteredName.trim() === '') {
            setEenteredNameIsValid(false)
            return;
        }

        setEenteredNameIsValid(true)

        console.log(enteredName)

        // nameInputRef.current.value = '';  => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName('')
    }
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler}/>
                {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

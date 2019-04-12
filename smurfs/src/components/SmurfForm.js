import React, {useState}from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {addSmurf} from '../actions'

const SF = (props) => {
    const [formInputs, setFormInputs] = useState({
        name: "",
        age: "",
        height: ""
    })

    const inputHandler = event => {
        setFormInputs({
            ...formInputs,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addSmurf(formInputs)
    }

    return (
        <SmurfForm
            onSubmit={handleSubmit}
        >
            <input
                name="name"
                placeholder="name"
                value={formInputs.name}
                onChange={inputHandler}
            />
            <input
                name="age"
                placeholder="age"
                value={formInputs.age}
                onChange={inputHandler}
            />
            <input
                name="height"
                placeholder="height"
                value={formInputs.height}
                onChange={inputHandler}
            />
            <button 
                type="submit"
            >Add Smurf</button>
        </SmurfForm>
    )
}

const SmurfForm = styled.form`
    width: 300px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;

    border-radius: 3px;
    border: 1px solid lightgray;

    input, button {
        padding: 10px;
        border-radius: 5px;
        margin: 5px;

        border: 1px solid lightgray;
    }

    button:hover {
        background: darkgray;
        color: white;
    }
`

export default connect(null, {
    addSmurf
})(SF)
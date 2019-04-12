import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

const SF = props => {
  const { smurf } = props;

  const [formInputs, setFormInputs] = useState({
    name: "",
    age: "",
    height: ""
  });

  const inputHandler = event => {
    setFormInputs({
      ...formInputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(formInputs);
  };

  const handleUpdate = (event, id) => {
    event.preventDefault();
    props.updateSmurf({ ...formInputs, id });
  };

  return (
    <SmurfForm
        className={smurf ? "update" : ""}
      onSubmit={smurf ? event => handleUpdate(event, smurf.id) : handleSubmit}
    >
      <input
        name="name"
        placeholder={smurf ? smurf.name : "name"}
        value={formInputs.name}
        onChange={inputHandler}
      />
      <input
        name="age"
        placeholder={smurf ? smurf.age : "age"}
        value={formInputs.age}
        onChange={inputHandler}
      />
      <input
        name="height"
        placeholder={smurf ? smurf.height : "height"}
        value={formInputs.height}
        onChange={inputHandler}
      />
      <button type="submit">{smurf ? "Update Smurf" : "Add Smurf"}</button>
    </SmurfForm>
  );
};

const SmurfForm = styled.form`
  width: 300px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;

  border-radius: 3px;
  border: 1px solid lightgray;

  &.update {
      border: none;
  }

  input,
  button {
    padding: 10px;
    border-radius: 5px;
    margin: 5px;

    border: 1px solid lightgray;
  }

  button:hover {
    background: darkgray;
    color: white;
  }
`;

export default connect(
  null,
  {
    addSmurf
  }
)(SF);

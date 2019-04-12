import React, { useState } from "react";
import styled from "styled-components";

import SmurfForm from "./SmurfForm";
export default props => {
  const { smurf } = props;

  const [editing, toggleEditing] = useState(false);

  return (
    <SmurfContainer>
      {!editing ? (
        <div>
          <h3>{smurf.name}</h3>
          <p>AGE: {smurf.age}</p>
          <p>HEIGHT: {smurf.height}</p>
        </div>
      ) : (
        <SmurfForm toggleEditingState={[editing, toggleEditing]} smurf={smurf} />
      )}
      <button className="edit" onClick={() => toggleEditing(!editing)}>
        {editing ? "CANCEL" : "EDIT"}
      </button>
    </SmurfContainer>
  );
};

const SmurfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid lightgrey;
  border-radius: 3px;
  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.3);
  margin: 10px auto;
  width: 300px;

  .edit {
    border: none;
    background: none;
    color: lightgrey;
    margin-bottom: 10px;
  }
`;

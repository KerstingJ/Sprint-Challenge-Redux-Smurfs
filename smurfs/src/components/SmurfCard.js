import React from 'react'
import styled from 'styled-components'

export default props => {
    const {smurf} = props;

    return (
        <Smurf>
            <h3>{smurf.name}</h3>
            <p>{smurf.height}</p>
            <p>{smurf.age}</p>
        </Smurf>
    )
}

const Smurf = styled.div`
    width: 300px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    box-shadow: 2px 2px 3px 1px rgba(0,0,0,0.3);

    margin: 10px auto;
`
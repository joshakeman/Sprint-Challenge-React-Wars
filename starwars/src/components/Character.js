import React from 'react'

const Character = (props) => {
    // console.log('Your Props are ' + props.params)
    return (
    <div class="character-card">
        <h3>Name: {props.name}</h3>
    </div>
    )
}

export default Character
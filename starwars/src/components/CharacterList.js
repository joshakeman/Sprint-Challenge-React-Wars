import React from 'react'
import Character from './Character'

const CharacterList = (props) => {
    return (
        <div class="characters-container">
           {props.list.map((char, index) => (<Character key={index} charInfo={char} />) )}
        </div>
    )
}

export default CharacterList
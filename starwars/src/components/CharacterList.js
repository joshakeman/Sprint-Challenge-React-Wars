import React from 'react'
import Character from './Character'

// const pics = [
//     '/img/luke-skywalker.png',
//     '/img/c3p0.png',
//     '/img/r2d2.png',
//     '/img/darth-vader.png',
//     '/img/princess-leia.png',
//     '/img/stormtrooper.png',
//     '/img/chewbacca.png',
//     '/img/boba-fett.png',
//     '/img/admiral-ackbar.png',
//     '/img/obiwan-kenobi.png',
//   ]

const CharacterList = (props) => {
    return (
        <div className="characters-container">
           {props.list.map((char, index) => (<Character key={index} charInfo={char} />) )}
        </div>
    )
}

export default CharacterList
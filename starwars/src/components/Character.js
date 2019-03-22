import React from 'react'

const Character = (props) => {
    // console.log('Your Props are ' + props.params)
    console.log(props.charInfo.films)
    return (
    <div className="character-card">
        <div className="char-content">
            <h3>{props.charInfo.name}</h3>
            <ul className="list">
                <li className="list-item"><strong>Born: </strong> {props.charInfo.birth_year}</li>
                <li className="list-item"><strong>Eye Color: </strong> {props.charInfo.eye_color}</li>
                <li className="list-item"><strong>Height: </strong> {props.charInfo.height}</li>
                <li className="list-item"><strong>Mass: </strong> {props.charInfo.mass}</li>
                <li className="list-item"><strong>Hair Color: </strong> {props.charInfo.hair_color}</li>
            </ul>
        </div>
        <img src="http://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/Luke-Skywalker-02-icon.png"></img>
    </div>
    )
}

export default Character
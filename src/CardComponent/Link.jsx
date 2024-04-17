import React from 'react'

const Link = (props) => {
    return (
        <a href={props.link} target='_blank' rel='noreferrer'>
            <button>Watch Now</button>
        </a>
    )
}

export default Link;
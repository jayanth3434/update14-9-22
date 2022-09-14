import React from "react";
import propTypes from 'prop-types'

const Button = props => {
    return(
        <button className={`btn ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    )
}

const OutlineButton = props => {
    return(
        <button className={`btn-outline ${props.className}`}
        onclick={props.onClick?() => props.onClick() : null}
        >
            {props.children}
        </button>
    )
}

button.propTypes = {
    onclick: propTypes.func
}
export default Button;
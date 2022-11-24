import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
        <button className="button" {...props}>
            <span>{props.up ? props.data : 'Azalt'}</span>
        </button>
    );
};

export default Button;

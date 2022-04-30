import React from 'react';

const defaultSettings = 'text-base font-semibold py-3 px-4 rounded-md';

const primaryStyle = 'bg-blue-700 text-white'
const secondaryStyle = 'bg-zinc-700 text-white';
const dangerStyle = 'bg-red-700 text-white';
const successStyle = 'bg-green-700 text-white';
const warningStyle = 'bg-yellow-600 text-white';

const getStyle = (style) => {
    switch(style){
        case 'primary':
            return(primaryStyle);
        case 'secondary':
            return(secondaryStyle);
        case 'danger':
            return(dangerStyle);
        case 'success':
            return(successStyle);
        case 'warning':
            return(warningStyle);
        default:
            return(primaryStyle);
    }
}

const Button = ({children, decoration, fullWidth, margin, onClick, type}) => {
    return(
        <button type={type} onClick={onClick} className={defaultSettings + ' ' + getStyle(decoration) + ' ' + (fullWidth ? 'w-full' : ' ') + ' ' + margin} >
            {children}
        </button>
    )
}

export default Button;
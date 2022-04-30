import React from 'react';

const defaultSettings = 'text-base font-semibold py-3 px-4 rounded-md';

const primaryStyle = 'bg-blue-600 text-white'
const secondaryStyle = 'bg-slate-600 text-white';
const dangerStyle = 'bg-red-600 text-white';
const successStyle = 'bg-green-600 text-white';
const warningStyle = 'bg-yellow-600 text-white';

const getType = (type) => {
    switch(type){
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

const Button = ({children, type, fullWidth, margin, onClick}) => {
    return(
        <button onClick={onClick} className={defaultSettings + ' ' + getType(type) + ' ' + (fullWidth ? 'w-full' : ' ') + ' ' + margin} >
            {children}
        </button>
    )
}

export default Button;
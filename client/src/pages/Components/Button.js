import React from 'react';

const defaultSettings = 'border px-4 py-2 shadow-sm text-base font-medium rounded-md';

const primaryStyle = 'border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
const secondaryStyle = 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
const dangerStyle = 'border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500';
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

const Button = ({children, decoration, fullWidth, margin, onClick, type, hasIcon}) => {
    return(
        <button type={type} onClick={onClick} className={ (hasIcon ? 'flex flex-row items-center' : '') + defaultSettings + ' ' + getStyle(decoration) + ' ' + (fullWidth ? 'w-full' : ' ') + ' ' + margin} >
            {children}
        </button>
    )
}

export default Button;
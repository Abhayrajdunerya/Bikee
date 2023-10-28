import React from 'react'

const ButtonRoundedSquare = ({isDisabled, btnType, containerStyles, textStyles, title, handleClick}) => {
  return (
    <button onClick={handleClick} type={btnType || 'button'} disabled={isDisabled} className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${containerStyles}`}>
        <span className={`${textStyles}`}> {title} </span>
    </button>
  )
}

export default ButtonRoundedSquare
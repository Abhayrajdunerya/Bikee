import React from 'react'

const InputField = ({type, title, placeholder, isTextArea, state, setState, required, disabled, containerStyle}) => {
    return (
        <div className={`relative mb-4 ${containerStyle}`}>
            <label className="leading-7 text-sm text-gray-700">{title}</label>

            {isTextArea ? (
                <textarea
                    placeholder={placeholder}
                    value={state}
                    required={required}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setState(e.target.value)}
                    disabled={disabled}
                />
            ) : (
                <input
                    type={type || "text"}
                    placeholder={placeholder}
                    required={required}
                    value={state}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setState(e.target.value)}
                    disabled={disabled}
                />
            )}
        </div>
    )
}

export default InputField
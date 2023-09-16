

const FormField = ({ type, title, state, placeholder, isTextArea, setState }) => {
    return (
        <div className="flexStart flex-col w-full gap-4">
            <label className="w-full text-gray-700">{title}</label>

            {isTextArea ? (
                <textarea
                    placeholder={placeholder}
                    value={state}
                    className="form_field-input"
                    onChange={(e) => setState(e.target.value)}
                />
            ) : (
                <input
                    type={type || "text"}
                    placeholder={placeholder}
                    required
                    value={state}
                    className="form_field-input"
                    onChange={(e) => setState(e.target.value)}
                />
            )}
        </div>
    )
}

export default FormField;
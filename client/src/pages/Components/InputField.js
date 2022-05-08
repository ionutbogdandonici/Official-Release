import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({ label, placeholder, name, type, attributes, autoComplete, disabled }) => {
    return (
        <div className={"my-2 " + attributes}>
            {!label ? null : (
                <label htmlFor={name} className="block text-sm font-medium text-zinc-700 mb-1">
                    {label}
                </label>
            )}

            <Field disabled={disabled} autoComplete={autoComplete || "off"} className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm block w-full border border-zinc-300 rounded-md text-base placeholder:text-zinc-400" id={name} name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name} component="div" className="text-red-600 font-semibold text-sm mt-2" />
        </div>
    );
};

export default InputField;

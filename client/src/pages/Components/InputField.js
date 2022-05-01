import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({ label, placeholder, name, type, attributes, autoComplete }) => {
    return (
        <div className={"my-2 " + attributes}>
            <label htmlFor={name} className="block text-sm font-semibold text-zinc-500 mb-2">
                {label}
            </label>
            <Field
                autoComplete={autoComplete || "off"}
                className="bg-zinc-200 border border-zinc-400 rounded-md text-sm w-full py-3 px-4 text-zinc-800 placeholder:text-zinc-500"
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
            />
            <ErrorMessage name={name} component="div" className="text-red-600 font-semibold text-sm mt-2" />
        </div>
    );
};

export default InputField;

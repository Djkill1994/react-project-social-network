import styles from "./FormControls.module.css"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"
import {FieldValidatorType} from "../../../utils/validators/validators"
import React from "react"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>)
};

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {meta, input, ...restProps} = props;
    return <FormControl{...props}><textarea {...input} {...restProps}/> </FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {meta, input, ...restProps} = props;
    return <FormControl{...props}><input {...input} {...restProps}/> </FormControl>
};


export function createField<FormKeysType extends string>(placeholder: string | undefined, name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: React.FC<WrappedFieldProps>,
                                                         props = {}, text = "") {

    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={component}
               {...props}/> {text}
    </div>
        ;
}

export type GetStringKeys<T> = Extract<keyof T, string>

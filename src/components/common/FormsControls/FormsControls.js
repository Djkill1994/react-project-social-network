import styles from "./FormControls.module.css"
import {Field} from "redux-form";

export const FormControl = ({meta: {touched, error}, input, children}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>)
};

export const TextArea = (props) => {
    const {meta, input, child, ...restProps} = props;
    return <FormControl{...props}><textarea {...input} {...restProps}/> </FormControl>
};

export const Input = (props) => {
    const {meta, input, child, ...restProps} = props;
    return <FormControl{...props}><input {...input} {...restProps}/> </FormControl>
};

    export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators} component={component}
               {...props}/> {text}
    </div>
)
import styles from "./FormControls.module.css"

export const FormControl = ({meta, input, child, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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
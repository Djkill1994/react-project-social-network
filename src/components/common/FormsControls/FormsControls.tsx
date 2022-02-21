import styles from "./FormControls.module.css"
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import { FieldValidatorType } from "../../../utils/validators/validators"
import React from "react"

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;

  return (
    <div className={ styles.formControl + " " + (hasError ? styles.error : " ") }>
      <div>
        { children }
      </div>
      { hasError && <span>{ error }</span> }
    </div>)
};

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
  //const { meta, input, child, ...restProps } = props;
  const { meta, input, ...restProps } = props;
  return <FormControl{ ...props }><textarea { ...input } { ...restProps }/> </FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  //const { meta, input, child, ...restProps } = props;
  const { meta, input, ...restProps } = props;
  return <FormControl{ ...props }><input { ...input } { ...restProps }/> </FormControl>
};

export type LoginFormValuesType = {
  email: string
  rememberMe: boolean
  captcha: string
  password: string
}

export const createField = (placeholder: string | undefined, name: string, validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {}, text = "") => (
  <div>
    <Field placeholder={ placeholder } name={ name }
           validate={ validators } component={ component }
           { ...props }/> { text }
  </div>
);

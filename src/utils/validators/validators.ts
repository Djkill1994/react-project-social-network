export type FieldValidatorType = (values: string) => string | undefined

export const required: FieldValidatorType = (values) => {
    if (values) return undefined;

    return "Field is required"
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (values) => {
    if (values.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}

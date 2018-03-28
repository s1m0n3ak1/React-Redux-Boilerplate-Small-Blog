export const validate = values => {
    const errors = {};

    if (!values.name)
        errors.name = 'Enter a Username.';

    if (!/^[A-Z0-9.-]{3,18}$/i.test(values.name))
        errors.name = 'Minimum 3 chars.';

    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Enter a valid email.';

    if (!values.password)
        errors.password = 'Please provide a valid password.';

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password))
        errors.password = 'Minimum 8 characters, at least 1 letter and 1 number.';

    if (!values.confirmation)
        errors.confirmation = 'Please Re-type your password.';

    if (values.confirmation !== values.password)
        errors.confirmation = 'Confirmation have to match the password.';

    return errors;
};

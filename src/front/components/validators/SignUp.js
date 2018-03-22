export const validate = values => {
    const errors = {};

    if (!values.name)
        errors.name = 'Enter a Username.';

    if (!values.email)
        errors.email = 'Enter a valid email.';

    if (!values.password)
        errors.password = 'Please provide a valid password.';

    if (!values.confirmation)
        errors.confirmation = 'Confirmation have to match the password.';

    return errors;
};

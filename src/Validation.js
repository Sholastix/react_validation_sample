function Validation(values) {

    let errors = {};

    if (!values.email) {
        errors.email = "Email address is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address incorrect!";
    }
    if (!values.password) {
        errors.password = "Password is required!";
    } else if (values.password.length < 9) {
        errors.password = "Password needs to be equal or more than 9 characters!";
    }

    return errors;
};

export default Validation;
import { useState, useEffect } from 'react';

// Cоздаём кастомный хук UseValidationForm.
const UseValidationForm = (callback, initialState = {}, Validation) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Создаём функцию изменения.
    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    // Создаём функцию отправки.
    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработчик ошибок.
        setErrors(Validation(values));
        setIsSubmitting(true);
    };

    // Создаём функцию очистки формы.
    const handleReset = (event) => {
        console.log('Reset completed.');
        setValues(
            {
                email: '',
                password: '',
            }
        );
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, callback, isSubmitting]);

    return {
        handleChange,
        handleSubmit,
        handleReset,
        values,
        errors,
    };
};

export default UseValidationForm;
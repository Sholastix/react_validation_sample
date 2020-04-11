import React from 'react';
import UseValidationForm from './UseValidationForm';
import Validation from './Validation';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import './ValidationForm.css';

const ValidationForm = () => {

    const { handleChange, handleSubmit, handleReset, values, errors } = UseValidationForm(
        submit,
        { email: '', password: '' },
        Validation,
    );

    function submit() {
        console.log('Submitted successfully!')
    };

    return (
        <div>
            <Form onSubmit={handleSubmit} noValidate>
                <FormGroup>
                    <Label for='email'>Email:</Label>
                    <div>
                        <Input
                            className={`${errors.email && 'inputError'}`}
                            type='email'
                            name='email'
                            id='email'
                            placeholder='example@gmail.com'
                            value={values.email}
                            onChange={handleChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password:</Label>
                    <div>
                        <Input
                            className={`${errors.password && 'inputError'}`}
                            type='password'
                            name='password'
                            id='password'
                            value={values.password}
                            onChange={handleChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                </FormGroup>
                <Button type='submit' color='primary' size='sm'>SUBMIT</Button>
                <Button size='sm' onClick={handleReset}>RESET</Button>
            </Form>
        </div>
    );
};

export default ValidationForm;
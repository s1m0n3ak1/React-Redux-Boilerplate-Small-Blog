import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// imported functions
import { userCreate } from '../actions/users';

// configurations
import Head from './helmets/SignUp';
import { validate } from './validators/SignUp';
import Config from './forms/Signup';

const asyncValidate = (values , dispatch) => {
    return dispatch(userCreate(values))
           .then(res => {
               if (res.err.response.status === 409) {
                   throw { email: res.err.response.data.message }
               }
           }).catch(err => {
               throw { email: err.email }
           });
 }

const renderField = ({
    input, label, type, typeCase, meta: { touched, error }
}) => (
    <div className={
        'form-group'
        + ((touched && error) ? ' is-invalid' : '')
    }>
        { typeCase === 'single-line' &&
            <input
                className={
                    'form-control'
                    + ((error && touched) ? ' is-invalid' : '')
                }
                placeholder={ label }
                type={ type }
                { ...input }
            />
        }
        <div className='text-help invalid-feedback'>
            { (touched && error) && error }
        </div>
    </div>
);

class SignUp extends Component {

    onSubmit = values => {
        this.props.userCreate(values);
    }

    render = () => {
        const { handleSubmit, pristine, submitting, reset } = this.props;

        return (
            <section className='container SignUp'>
                <Head />
                <form onSubmit={ handleSubmit(this.onSubmit) }>
                    { Config !== undefined &&
                        Config.map((field, i) => (
                            <Field
                                key={ i }
                                type={ field.inputType }
                                name={ field.name }
                                label={ field.placeholder }
                                typeCase={ field.typeCase }
                                component={ renderField }
                            />
                    ))}
                    <button
                        disabled={ submitting }
                        type='submit'
                        className='btn btn-primary'>
                        Signup
                    </button>
                    &emsp;
                    <button
                        type='button'
                        className='btn btn-secondary'
                        disabled={ pristine || submitting }
                        onClick={ reset }>
                        Clear
                    </button>
                </form>
            </section>
        );
    };
}

export default reduxForm({
    form: 'SignUpForm',
    validate,
    asyncValidate,
    asyncChangeFields: ['email']
})(
    connect(
        null, { userCreate }
    )(SignUp)
);

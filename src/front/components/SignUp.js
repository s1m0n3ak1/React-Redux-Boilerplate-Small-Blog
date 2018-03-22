import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// imported functions
import { userCreate } from '../actions';

// configurations
import Head from './helmets/SignUp';
import { validate } from './validators/Signup';
import Config from './forms/Signup';

class SignUp extends Component {

    createField = field => {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? 'is-invalid' : '' }`;

        return (
            <div className={ className }>
                { field.case === 'single-line' &&
                    <input
                        className={
                            'form-control'
                            + (error && touched ? ' is-invalid' : '')
                        }
                        placeholder={ field.placeholder }
                        type={ field.inputType }
                        { ...field.input }
                    />
                }
                <div className='text-help invalid-feedback'>
                    { touched ? error : '' }
                </div>
            </div>
        )
    }

    onSubmit = values => {
        this.props.userCreate(values, () => {
            this.props.history.push('/');
        });
    }

    render = () => {
        const { handleSubmit } = this.props;

        return (
            <section className='container SignUp'>
                <Head />
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    { Config !== undefined &&
                        Config.map((field, i) => (
                            <Field
                                key={ i }
                                inputType={ field.inputType }
                                name={ field.name }
                                placeholder={ field.placeholder }
                                case={ field.case }
                                component={ this.createField }
                            />
                    ))}
                    <button
                        type='submit'
                        className='btn btn-primary'>
                        Signup
                    </button>
                </form>
            </section>
        );
    };
}


export default reduxForm({
    validate,
    form: 'SignUpForm'
})(
    connect(
        null, { userCreate }
    )(SignUp)
);

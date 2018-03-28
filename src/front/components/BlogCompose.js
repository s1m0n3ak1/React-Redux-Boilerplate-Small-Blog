// libs
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Head from './helmets/BlogCompose';

// imported functions
import { postNew } from '../actions';
import { validate } from './validators/BlogCompose';
import Config from './forms/BlogCompose';

class BlogCompose extends Component {

    renderField = field => {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? 'is-invalid' : '' }`;

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                { field.typeCase === 'single-line' ?
                    <input
                        className={
                            'form-control'
                            + (error && touched ? ' is-invalid' : '')
                        }
                        type={ field.inputType }
                        { ...field.input }
                    />
                    :
                    <textarea
                        className={
                            'form-control post-area'
                            + ( error && touched ? ' is-invalid' : '')
                        }
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
        this.props.postNew(values, () => {
            this.props.history.push('/');
        });
    }

    render = () => {
        const { handleSubmit } = this.props;

        return (
            <section className='container'>
                <Head />
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    { Config !== undefined &&
                        Config.map((field, i) => (
                            <Field
                                key={ i }
                                inputType={ field.inputType }
                                name={ field.name }
                                label={ field.label }
                                typeCase={ field.typeCase }
                                component={ this.renderField }
                            />
                    ))}
                    <button
                        onClick={ this.revealHistory }
                        type='submit'
                        className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </section>
        );
    };
}


export default reduxForm({
    validate,
    form: 'BlogNewPostForm'
})(
    connect(
        null, { postNew }
    )(BlogCompose)
);

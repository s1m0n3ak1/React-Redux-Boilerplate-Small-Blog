// libs
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

// imported functions
import { newPost } from '../actions';
import { validate } from './validators/BlogNewPostForm';

class BlogNewPost extends Component {

    createField = field => {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? 'is-invalid' : '' }`;

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                { field.case === 'single-line' ?
                    <input
                        className={
                            'form-control' + (error && touched ? ' is-invalid' : '')
                        }
                        type={ field.inputType }
                        { ...field.input }
                    />
                    :
                    <textarea
                        className={
                            'form-control' + ( error && touched ? ' is-invalid' : '')
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

    onSubmit(values) {
        this.props.newPost(values);
    }

    render = () => {
        const { handleSubmit } = this.props;

        const config = [
            {
                name: 'title',
                label: 'Post Title',
                inputType: 'text',
                case: 'single-line'
            },
            {
                name: 'author',
                label: 'Author',
                inputType: 'text',
                case: 'single-line'
            },
            {
                name: 'cover',
                label: 'Cover Image',
                inputType: 'url',
                case: 'single-line'
            },
            {
                name: 'category',
                label: 'Category',
                inputType: 'text',
                case: 'single-line'
            },
            {
                name: 'content',
                label: 'Post Text',
                inputType: 'textarea',
                case: 'multi-line'
            }
        ]

        return (
            <section className='container'>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    { config !== undefined &&
                        config.map((field, i) => (
                            <Field
                                key={ i }
                                inputType={ field.inputType }
                                name={ field.name }
                                label={ field.label }
                                case={ field.case }
                                component={ this.createField }
                            />
                    ))}
                    <button
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
        null, { newPost }
    )(BlogNewPost)
);

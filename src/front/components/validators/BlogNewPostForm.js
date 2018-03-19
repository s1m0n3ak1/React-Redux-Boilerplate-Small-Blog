export const validate = values => {
    const errors = {};

    if (!values.title)
        errors.title = 'Enter a title.';

    if (!values.author)
        errors.author = 'Please provide an author name.';

    if (!values.cover)
        errors.cover = 'Please provide an image URL.';

    if (!values.category)
        errors.category = 'Enter a category.';

    if (!values.content)
        errors.content = 'Enter some content please.';

    return errors;
}

export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'Enter your Full Name',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const email_validation = {
    name: 'email',
    label: 'email',
    type: 'email',
    id: 'email',
    placeholder: 'Enter Your Email Address',
    validation: {
        required: {
            value: true,
            message: 'required',
        },

    },
};

export const cell_validation = {
    name: 'cell',
    label: 'phone number',
    type: 'string',
    id: 'cell',
};

export const gender_validation = {
    name: 'gender',
    label: 'gender',
    id: 'gender',
    options: ['Female', 'Male', 'Other'],
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const date_validation = {
    name: 'birthday',
    label: 'birthday',
    id: 'birthday',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const firstNameValidation = {
    name: 'firstname',
    label: 'first name',
    type: 'text',
    id: 'firstName',
    placeholder: 'First Name',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const middleNameValidation = {
    name: 'middlename',
    label: 'middle name',
    type: 'text',
    id: 'midName',
    placeholder: 'Middle Name',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const lastNameValidation = {
    name: 'lastname',
    label: 'last name',
    type: 'text',
    id: 'lastName',
    placeholder: 'Last Name',
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

export const address_validation = {
    name: 'address',
    label: 'address',
    type: 'address',
    id: 'address',
    placeholder: 'Enter Your Address',
    validation: {
        required: {
            value: true,
            message: 'required',
        },

    },
};

export const cug_validation = {
    name: 'cell',
    label: 'CUG Line',
    type: 'string',
    id: 'cug',
};


export const cell_validation = {
    name: 'cell',
    label: 'person phone number',
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

export const department_validation = {
    name: 'department',
    label: 'department',
    id: 'department',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const date_validation = {
    name: 'date of birth',//lol it's taking name instead of label
    label: 'Date Of Birth',
    id: 'birthday',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

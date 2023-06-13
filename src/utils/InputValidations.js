export const firstNameValidation = {
    name: 'firstName',
    label: 'first name',
    type: 'text',
    id: 'firstName',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const middleNameValidation = {
    name: 'middleName',
    label: 'middle name',
    type: 'text',
    id: 'midName',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const lastNameValidation = {
    name: 'lastName',
    label: 'last name',
    type: 'text',
    id: 'lastName',
    placeholder: 'Cannot leave blank',
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
    placeholder: 'Cannot leave blank',
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
    type: 'text',
    id: 'address',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },

    },
};

export const nationality_validation = {
    name: 'nationality',
    label: 'nationality',
    type: 'text',
    id: 'nationality',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },

    },
};
export const state_validation = {
    name: 'state',
    label: 'State of Origin',
    type: 'text',
    id: 'state-of-origin',
    options: [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'Federal Capital Territory',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara'
    ],
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'Required',
        },
    },
};


export const role_validation = {
    name: 'role',
    label: 'role',
    type: 'role',
    id: 'role',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const cug_validation = {
    name: 'CUGLine',
    label: 'CUG Line',
    type: 'string',
    id: 'cug',
};


export const cell_validation = {
    name: 'phone1',
    label: 'phone number',
    type: 'cell',
    id: 'cell',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const cell_validation2 = {
    name: 'phone2',
    label: 'phone number 2',
    type: 'cell2',
    id: 'cell2',
    placeholder: 'Cannot leave blank',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
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

export const category_validation = {
    name: 'category',
    label: 'category',
    id: 'category',
    options: ['Permanent', 'Contract'],
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const marital_status_validation = {
    name: 'maritalStatus',
    label: 'marital status',
    id: 'marital-status',
    options: ['single', 'married'],
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};


export const employment_status_validation = {
    name: 'employmentStatus',
    label: 'employment status',
    id: 'employ-status',
    options: ['Employed', 'Terminated', 'Absconded', 'Resigned', 'Redundancy', 'Retirement', 'Dismissal', 'Deceased', 'StandBy'],
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

export const division_validation = {
    name: 'division',
    label: 'division',
    id: 'division',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const date_validation = {
    name: 'dob',//lol it's taking name instead of label
    label: 'Date Of Birth',
    id: 'birthday',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const employmentDateValidation = {
    name: 'employmentDate',//lol it's taking name instead of label
    label: 'Date Of employment',
    id: 'dateofemployment',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

export const geo_location_validation = {
    name: 'geoLocation',
    label: 'geo location',
    id: 'geo-location',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};


export const salary_validation = {
    name: 'salary',
    label: 'salary',
    id: 'salary',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
};

import * as yup from 'yup'

export const Schema = yup.object().shape({
    name:yup.string().min(4,'minimum 4 characters').matches(/^[a-zA-Z ]+$/,'alphabets Only').required('required'),
    area:yup.string().required('Required'),
    category: yup.string().required('Required'),
    openingDate: yup.string().required('Required'),
    closingDate: yup.string().required('Required')
})
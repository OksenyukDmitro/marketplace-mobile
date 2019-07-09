import * as Yup from 'yup';

export const login = Yup.object().shape({
  email: Yup.string()
    .email('Please, enter valid email.')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

export const register = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please, enter valid email.')
    .required('Email is required!'),
  fullName: Yup.string()
    .trim()
    .min(3, 'Name is too short')
    .required('Name is required!'),
  password: Yup.string()
    .trim()
    .min(6, 'Password must contain 6-20 characters.')
    .max(20, 'Password must contain 6-20 characters.')
    .required('Password is required'),
  passwordAgain: Yup.string()
    .trim()
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords don’t match.'),
});

export const addProductSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required('Title is required'),
  location: Yup.string()
    .trim()
    .required('Location is required'),
  description: Yup.string(),
  photos: Yup.array().max(6),
  price: Yup.number(),
});

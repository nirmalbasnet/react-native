import * as Yup from 'yup';

export const passwordlengthValidator = Yup.object().shape({
  passwordLength: Yup.number()
    .required('Password length is required')
    .min(4, 'Password must be atleast 4 characters long')
    .max(16, 'Password must be atmost 16 characters'),
});

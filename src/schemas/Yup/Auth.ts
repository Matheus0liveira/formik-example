import * as Yup from 'yup';

export const AuthSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'O mínimo são 4 caracteres')
    .required('Esse campo é obrigatório'),
  lastName: Yup.string()
    .min(4, 'O mínimo são 4 caracteres')
    .required('Esse campo é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Esse campo é obrigatório'),
  password: Yup.string()
    .min(4, 'O mínimo são 4 caracteres')
    .required('Esse campo é obrigatório'),
  confirmPassword: Yup.string()
    .min(4, 'O mínimo são 4 caracteres')
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('Esse campo é obrigatório'),
});

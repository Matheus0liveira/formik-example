import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { AuthSchema } from 'schemas/Yup/Auth';
import { ContentFormGroup } from './content';
import './styles.css';

export type MyFormValues = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type CustomErrorMessageProps = {
  name: keyof MyFormValues;
};

export default function Auth() {
  const initialValues: MyFormValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (
    values: MyFormValues,
    _: FormikHelpers<MyFormValues>
  ) => {
    console.log('values', values);
  };
  console.log('Render');
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AuthSchema}
    >
      {({ isValid, dirty }) => (
        <Form className="form">
          {ContentFormGroup.map(({ id, idName, labelName, type }) => (
            <div key={id} className="form-group">
              <label htmlFor={idName}>{labelName}</label>
              <Field id={idName} name={idName} type={type} />
              <CustomErrorMessage name={idName} />
            </div>
          ))}

          <div className="form-group">
            <button disabled={!isValid || !dirty} type="submit">
              Entrar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export const CustomErrorMessage = ({ name }: CustomErrorMessageProps) => (
  <ErrorMessage
    name={name}
    render={(msg) => <p className="error-message">{msg}</p>}
  />
);

import { MyFormValues } from '.';

export type ContentAuthProps = {
  id: number;
  type: string;
  labelName: string;
  idName: keyof MyFormValues;
}[];

export const ContentFormGroup = [
  { id: 1, type: 'text', idName: 'name', labelName: 'Name' },
  { id: 2, type: 'text', idName: 'lastName', labelName: 'Last Name' },
  { id: 3, type: 'email', idName: 'email', labelName: 'E-mail' },
  { id: 4, type: 'password', idName: 'password', labelName: 'Password' },
  {
    id: 5,
    type: 'password',
    idName: 'confirmPassword',
    labelName: 'Confirm Password',
  },
] as ContentAuthProps;

import { LoginRequest } from './index.ts';

export type AuthField = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
};

export const loginFields: AuthField[] = [
  {
    id: 'email',
    label: 'E-mail',
    placeholder: 'Input your email',
    type: 'email'
  },
  {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
];


export const registerFields: AuthField[] = [
  {
    id: 'first_name',
    label: 'First Name',
    placeholder: 'Enter your First Name',
    type: 'alphabeth'
  },
  {
    id: 'last_name',
    label: 'Last Name',
    placeholder: 'Enter your Last Name',
    type: 'alphabeth'
  },
  {
    id: 'email',
    label: 'E-mail',
    placeholder: 'Input your email',
    type: 'email'
  },
  {
    id: 'phone_number',
    label: 'Phone Number',
    placeholder: 'Enter your Phone Number',
    type: 'number'
  },
  {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
];

export const initialLoginFieldState: LoginRequest = {
  email: '',
  password: ''
};

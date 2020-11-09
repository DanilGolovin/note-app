import isEmail from 'validator/lib/isEmail';

export const validateEmail = (email: string) => {
  return isEmail(email.toLowerCase());
};

export const validatePassword = (password: string) => {
  const rePassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  return rePassword.test(password);
};

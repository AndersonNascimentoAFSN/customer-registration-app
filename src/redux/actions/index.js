export const REGISTER = 'REGISTER';
export const DELETE = 'DELETE';

export const register = (user) => ({
  type: REGISTER,
  payload: user,
});

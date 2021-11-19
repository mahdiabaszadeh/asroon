import { DELETE_USER, REGISTER } from "../constants/userConstants";

export const RegisterAction = (payload) => ({
  type: REGISTER,
  payload,
});
export const deleteUser = () => ({
  type: DELETE_USER,
});

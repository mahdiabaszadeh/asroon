import { REGISTER } from "../constants/userConstants";

export const RegisterAction = (payload) => ({
  type: REGISTER,
  payload,
});

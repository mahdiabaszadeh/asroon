import { REGISTER, DELETE_USER } from "../constants/userConstants";

const initState = {
  data: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER: {
      return { ...state, data: { ...action.payload } };
    }
    case DELETE_USER: {
      return { ...state, data: null };
    }
    default:
      return state;
  }
};

export default userReducer;

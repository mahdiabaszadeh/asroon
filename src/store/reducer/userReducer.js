import { REGISTER } from "../constants/userConstants";

const initState = {
  data: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER: {
      return { ...state, data: { ...action.payload } };
    }
    default:
      return state;
  }
};

export default userReducer;

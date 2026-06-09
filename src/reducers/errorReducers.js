import { GET_ERRORS } from "../actions/types";

const initialState = {
  errors: null,
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        errors: action.payload,
      };

    default:
      return state;
  }
}

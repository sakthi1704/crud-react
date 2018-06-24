import { HANDLECHANGE } from '../actions/handle_change';
import { HANDLESUBMIT } from '../actions/handle_submit';

function todoReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case HANDLECHANGE:
      newState = { ...state, ...action.payload };
      break;
    case HANDLESUBMIT:
      newState = { ...state, ...action.payload };
      break;
    default:
      break;
  }
  return newState;
}
export default todoReducer;

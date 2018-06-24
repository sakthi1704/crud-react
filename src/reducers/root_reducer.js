import { combineReducers } from 'redux';
import todo from './todo_reducer';

// export default combineReducers({
//   ui
// });
const rootReducer=combineReducers({
  todo:todo
});

export default rootReducer;

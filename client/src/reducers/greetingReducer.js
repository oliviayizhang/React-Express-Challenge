import {
  NEXT_ITEM,
  GREETING_REQUEST,
  GREETING_RECEIVE
} from '../actions'

const initialState = {
  index: 0,
  content: [],
  isLoading: false
}

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_ITEM:
      if(state.index < state.content.length - 1 ) {
        return {
          ...state,
          index: state.index + 1
        }
      } else {
        return {
          ...state,
          index: 0
        }
      }
    case GREETING_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GREETING_RECEIVE:
      return {
        ...state,
        content: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
};

export default greetingReducer;

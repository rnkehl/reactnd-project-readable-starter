import {
  ADD_POST
} from '../actions'

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST :
      return action.post
    default :
      return state
  }
}

import { ADD } from './actionTypes'

const addReducer = (state = [], action) => {
     switch (action.type) {
          case ADD:
               return [...state, action.payload.data];
          default:
               return state;
     }
}

export default addReducer;
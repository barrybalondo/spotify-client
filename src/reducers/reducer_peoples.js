import { FETCH_PEOPLES, FETCH_PEOPLE } from '../actions/types';


const INITIAL_STATE = { all: null, people: null };

export default function( state = INITIAL_STATE, action ) {
  
  switch (action.type) {
  
  case FETCH_PEOPLE:
    
    return { ...state, people: action.payload.data } 

  case FETCH_PEOPLES:    
    return { ...state, all: action.payload.data };

  default:
    return state;   
  }

}
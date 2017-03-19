import axios from 'axios';
import { 
  FETCH_PEOPLES,
  FETCH_PEOPLE, 
} from './types';

const SPOTIFY_API = 'http://localhost:3300/api';

export function fetchPeoples() {

  const request = axios.get(`${SPOTIFY_API}/people`)
  return {
    type: FETCH_PEOPLES,
    payload: request
  };

}

export function fetchPeople(id) {
  const request = axios.get(`${SPOTIFY_API}/people/${id}`);

   return {
    type: FETCH_PEOPLE,
    payload: request
  };

}
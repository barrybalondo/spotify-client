import axios from 'axios';
import { 
  FETCH_PEOPLES,
  FETCH_PEOPLE, 
  DELETE_PEOPLE,
  CREATE_PEOPLE,
  UPDATE_PEOPLE,
} from './types';

const SPOTIFY_API = 'http://spotify-server-barry.herokuapp.com/api/';

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

export function createPeople(props) {
  const request = axios.post(`${SPOTIFY_API}/people/`, props)
  return {
    type: CREATE_PEOPLE,
    payload: request
  };

}

export function updatePeople(id, props) {
  console.log(id, props);
  const request = axios.put(`${SPOTIFY_API}/people/${id}`, props)
  return {
    type: UPDATE_PEOPLE,
    payload: request
  };

}

export function deletePeople(id) {
  const request = axios.delete(`${SPOTIFY_API}/people/${id}`);
   return {
    type: DELETE_PEOPLE,
    payload: request
  };

}
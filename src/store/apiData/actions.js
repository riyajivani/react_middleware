import { ADD } from './actionTypes'

export const addData = (data) => ({
     type: ADD,
     payload: { data },
});
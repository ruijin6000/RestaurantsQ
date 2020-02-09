import axios from 'axios';
import * as TYPE from "./types";


export const fetchCities = (cityName) => async dispatch => {
     const res = await axios.post('/api/cities',cityName);
     dispatch({type: TYPE.FETCH__CITY, payload: res.data});
};

export const fetchEstablishments =(cityID) => async dispatch => {
     const res = await axios.post('/api/establishments', cityID);
     dispatch({type: TYPE.FETCH__ESTABLISHMENTS, payload: res.data})

};

export const searchRes =(id) => async dispatch => {
     const res = await axios.post('/api/search', id);
     dispatch({type: TYPE.FETCH__RESTAURANTS, payload: res.data})

};


export const mySelect =(payload) => {
     return {
          type: TYPE.MY_SELECT,
          payload: payload,
     };

};


export const cleanCities = (payload) => {
     return {
          type: TYPE.CLEAN_CITY,
          payload: payload,
     };
};


export const cleanEst = (payload) => {
     return {
          type: TYPE.CLEAN_ESTABLISHMENTS,
          payload: payload,
     };
};

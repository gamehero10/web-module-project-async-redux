import axios from 'axios';
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";


export const getGifs = (searchTerm) => {
    return(dispatch => {
        dispatch({type: FETCH_START});
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=7MC7ZOW2yAbCb3xi5H9apDL4lrSZO4NL&q=${searchTerm}`)
             .then(res => {
                dispatch({type:FETCH_SUCCESS, payload: res.data.data});
             })
    })
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}


export const fetchSuccess = gifs => {
    return ({type: FETCH_SUCCESS, payload: gifs})
}
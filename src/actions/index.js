import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_BEGIN = 'FETCH_BEGIN';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => dispatch => {
    dispatch(fetchSmurf());
    //axios call goes here
    axios.get('')
    .then(resp => {
        dispatch(fetchSmurf(resp.data));
    })
    .catch(err =>{
        dispatch(errMsg(err));
    })
}
//actions for doing the things go here
export const fetchSmurf = (smurf)=> {
    return ({type:FETCH_SMURF})
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload:error})
}

export const fetchBegin = () => {
    ({type:FETCH_BEGIN})
}

export const addSmurf = () => {
    ({type:ADD_SMURF, payload:smurf})
}



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_BEGIN = 'FETCH_BEGIN';
export const ADD_SMURF = 'ADD_SMURF';
export const FAIL_MSG = 'FAIL_MSG';

export const grabSmurfs = () => dispatch => {
    
    dispatch(fetchBegin());
    //axios call goes here
    axios.get('http://localhost:3333/smurfs')
    .then(resp => {
        console.log('this is the resp stuff!', resp);
        dispatch(fetchSmurf(resp.data));
    })
    .catch(err =>{
        dispatch(fetchFail(err));
    })
}
//actions for doing the things go here
export const fetchSmurf = (smurfs)=> {
    return ({type:FETCH_SMURF, payload:smurfs})
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload:error})
}

export const fetchBegin = () => {
    return ({type:FETCH_BEGIN})
}

export const addSmurf = (smurf) => {
   return ({type:ADD_SMURF, payload:smurf})
}

export const failMsg = (error) => {
   return ({type:FAIL_MSG, payload:error})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
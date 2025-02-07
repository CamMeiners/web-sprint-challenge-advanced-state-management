import { bindActionCreators } from "redux";
import {FETCH_SMURF, FETCH_FAIL, FETCH_BEGIN, ADD_SMURF, FAIL_MSG} from '../actions/index'




export const initialState = {
    smurfs: [],
    isLoading: false,
    errMsg:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        //do this if smurf was fetched
        case FETCH_SMURF:
        return {
            ...state,
            smurfs: action.payload,
            isLoading: false,
            errMsg:''
        }
        //do this if fetching the smurf failed
        case FETCH_FAIL:
            return{
                ...state,
                smurfs:[],
                isLoading:false,
                errMsg:action.payload
            }
        //do this when starting to fetch a smurf
        case FETCH_BEGIN: 
            return {
                ...state,
                smurfs:[],
                isLoading:true,
                errMsg:''
            }
        //do this to add a smurf
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, {id:action.payload.id, name:action.payload.name, nickname:action.payload.nickname, description:action.payload.description, position:action.payload.position}],
                isLoading:false,
                errMsg:''
            }
            case FAIL_MSG:
                return{
                    ...state,
                    errMsg:action.payload
                }
            default:
                return state;

    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
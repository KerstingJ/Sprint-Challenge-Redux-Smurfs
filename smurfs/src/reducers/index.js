/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GETTING_SMURFS, GETTING_SMURFS_SUCCESS, GETTING_SMURFS_FAILURE,
  ADDING_SMURF, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE,
} from '../actions/index'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function gettingSmurf(state, action){
  return {
    ...state,
    fetchingSmurfs: true
  }
}
function gettingSmurfSuccess(state, action){
  return {
    ...state,
    fetchingSmurfs: false,
    smurfs: action.payload,
    error: null
  }
}
function gettingSmurfFailure(state, action){
  return {
    ...state,
    fetchingSmurfs: false,
    error: "failed to fetch smurfs"
  }
}


// smurfs: [],
//   fetchingSmurfs: false,
//   addingSmurf: false,
//   updatingSmurf: false,
//   deletingSmurf: false,
//   error: null

function addingSmurf(state, action){
  return {
    ...state,
    addingSmurf: true
  }
}
function addingSmurfSuccess(state, action){
  return {
    ...state,
    addingSmurf: false,
    smurfs: action.payload
  }
}
function addingSmurfFailure(state, action){
  return {
    ...state,
    addingSmurf: false,
    error: action.payload
  }
}

// function updatingSmurf(state, action){
//   return state
// }
// function updatingSmurfSuccess(state, action){
//   return state
// }
// function updatingSmurfFailure(state, action){
//   return state
// }

// function deletingSmurf(state, action){
//   return state
// }
// function deletingSmurfSuccess(state, action){
//   return state
// }
// function deletingSmurfFailure(state, action){
//   return state
// }

export default (state = initialState, action) => {
  switch(action.type){

    case GETTING_SMURFS:
      return gettingSmurf(state, action)
    case GETTING_SMURFS_SUCCESS:
      return gettingSmurfSuccess(state, action)
    case GETTING_SMURFS_FAILURE:
      return gettingSmurfFailure(state, action)

    case ADDING_SMURF:
      return addingSmurf(state, action)
    case ADDING_SMURF_SUCCESS:
      return addingSmurfSuccess(state, action)
    case ADDING_SMURF_FAILURE:
      return addingSmurfFailure(state, action)

    default:
      return state
  }
}
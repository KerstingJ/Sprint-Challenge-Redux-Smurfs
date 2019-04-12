/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


// GETTING_SMURFS, GETTING_SMURFS_SUCCESS, GETTING_SMURFS_FAILURE
const GETTING_SMURFS = "GETTING_SMURFS"
const GETTING_SMURFS_SUCCESS = "GETTING_SMURFS_SUCCESS"
const GETTING_SMURFS_FAILURE = "GETTING_SMURFS_FAILURE"

export const getSmurfs = () => dispatch => {
  dispatch({
    type: GETTING_SMURFS
  })

  axios
    .get('http://localhost:3333/smurfs/')
    .then(res => {
      dispatch({
        type: GETTING_SMURFS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: GETTING_SMURFS_FAILURE,
        payload: err.message
      })
    })

}

// ADDING_SMURF, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE
const ADDING_SMURF = "ADDING_SMURF"
const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS"
const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE"

export const addSmurf = (smurf) => dispatch => {
  dispatch({
    type: ADDING_SMURF
  })

  axios
    .post('http://localhost:3333/smurfs/', smurf)
    .then(res => {
      dispatch({
        type: ADDING_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: ADDING_SMURF_FAILURE,
        payload: err.message
      })
    })
}

// UPDATING_SMURF, UPDATING_SMURF_SUCCESS, UPDATING_SMURF_FAILURE
const UPDATING_SMURF = "UPDATING_SMURF"
const UPDATING_SMURF_SUCCESS = "UPDATING_SMURF_SUCCESS"
const UPDATING_SMURF_FAILURE = "UPDATING_SMURF_FAILURE"

export const updateSmurf = (id) => dispatch => {
  dispatch({
    type: UPDATING_SMURF
  })

  axios
    .put(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: UPDATING_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: UPDATING_SMURF_FAILURE,
        payload: err.message
      })
    })
}

// DELETING_SMURF, DELETING_SMURF_SUCCESS, DELETING_SMURF_FAILURE
const DELETING_SMURF = "DELETING_SMURF"
const DELETING_SMURF_SUCCESS = "DELETING_SMURF_SUCCESS"
const DELETING_SMURF_FAILURE = "DELETING_SMURF_FAILURE"

export const deleteSmurf = (id) => dispatch => {
  dispatch({
    type: DELETING_SMURF
  })

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({
        type: DELETING_SMURF_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: DELETING_SMURF_FAILURE,
        payload: err.message
      })
    })
}

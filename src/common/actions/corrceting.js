// import axios from 'axios'
import * as actionTypes from '../constants/corrceting';

export const getQuesList = (data)=>dispatch => {
  dispatch(getQuesListStart(data));
   return  Ajax.get({url:'test.json'}).then(data => {
      dispatch(getQuesListSuccess(data));
      return data
    });
};

function getQuesListStart(data) {
  return {
    type: actionTypes.GET_QUES_LIST_START,
    payload: data
  };
}
function getQuesListSuccess(data) {
  return {
    type: actionTypes.GET_QUES_LIST_SUCCESS,
    payload: data
  };
}

function getQuesListFail(data) {
  return {
    type: actionTypes.GET_QUES_LIST_FAIL,
    payload: data
  };
}

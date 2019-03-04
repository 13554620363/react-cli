// import axios from 'axios'
import * as actionTypes from '../constants/corrceting';

export const getQuesList = (data) => {
  return dispatch => {
   return  Ajax.default.get({url:'/movie/top250'} ).then(data => {
     console.log(data)
      dispatch(getQuesListSuccess(data));
      return data
    });
  };
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

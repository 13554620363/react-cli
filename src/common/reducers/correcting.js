import { handleActions } from 'redux-actions';
import * as actionTypes from '../constants/corrceting';


export const Test = handleActions(
  {
    [actionTypes.GET_QUES_LIST_START](state, action) {
      return { ...state, loading: true, message: '' };
    },
    [actionTypes.GET_QUES_LIST_SUCCESS](state, action) {
      const res = action.payload;
      let questionInfoList = res;
      return { ...state, questionInfoList, loading: false };
    },
    [actionTypes.GET_QUES_LIST_FAIL](state, action) {
      const questionInfoList = action.payload;
      return { ...state, questionInfoList, loading: false };
    }
  },
  {
    examLoad: [],
    iScomplete: false,
    loading: false,
    correctRate: 0,
    examResult: {},
    message: '',
    questionInfoList: []
  }
);

// /companies/accessible
// import {ADDAPP} from "../actionTypes";
// import {ADDAPP} from "../actionTypes";
import { Constants } from './types';


export const addApp = text => ({
  type: Constants.ADDAPP ,
  // id: nextTodoId++,
  payload:{
    text
  }
})


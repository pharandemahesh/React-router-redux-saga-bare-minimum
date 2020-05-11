import { homePageAction1 } from "./action";

const initialState = {
  homePageState:{},
  actionPageState:{},
  contactusPageState:{}
};

function rootReducer(state=initialState,action){ 
  if (action.type === "homePageAction1") {
    return {...state, homePageState:{alert:'click'}}
  }
  else if (action.type === "DATA_LOADED") {
    //add payload data here
    return {...state, homePageState:{data:'loaded'}}
  }
  return state; 
  } 
  
export default rootReducer; 
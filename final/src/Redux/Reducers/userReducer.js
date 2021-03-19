
import produce from 'immer'
import createReducer from "./ReducerUtils";
const initialState = {
    user:{},
};

// export default produce((state,action)=>{
//     switch(action.type){
//         case 'SET_USER':{
//             let user=JSON.parse(action.payload)
//             state.user=user;
//             console.log(state.user)
//         }
//             break;
//         default:
//             break;
//     }
// }, initialState)

const userReducer = {
    setUser(state, action) {
        let user=JSON.parse(action.payload)
        state.user=user;
    }
  };
  
  export default produce((state, action) => createReducer(state, action, userReducer), initialState);

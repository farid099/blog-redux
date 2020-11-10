import { FETCH_POSTS } from "./postActionTypes";


const fetchPostReducer =  (state = [], action) =>{

    switch (action.type) {
        case FETCH_POSTS:
            console.log('asd');
            return action.payload    
        default:
            console.log(action.payload);
            return state
    }

}

export default fetchPostReducer


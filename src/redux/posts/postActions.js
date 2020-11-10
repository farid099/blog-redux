import { wait } from "@testing-library/react";
import jsonPlaceHolder from "../../apis/jsonPlaceHolder";
import { FETCH_POSTS } from "./postActionTypes";

export const fetchPosts = () => async (dispatch)=>{
    
    
    const response = await jsonPlaceHolder.get('/posts');

    // return{
    //     type: "FETCH_POSTS", payload: response.data
    // }
    dispatch({ type: FETCH_POSTS, payload: response.data })
    // console.log(response.data);
}

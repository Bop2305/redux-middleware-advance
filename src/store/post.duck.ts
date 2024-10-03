import { Dispatch, Reducer } from "redux"
import postService from "./post.service"

const GET_POSTS_REQUEST = "post/GET_POSTS_REQUEST"
const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS"
const GET_POSTS_FAILURE = "post/GET_POSTS_FAILURE"
const GET_POST = "post/GET_POST"
const CREATE_POST = "post/CREATE_POST"
const UPDATE_POST = "post/UPDATE_POST"
const DELETE_POST = "post/DELETE_POST"

const initialState = {
  posts: [],
  post: {},
  error: ""
}

export const getPosts = () => async (dispatch: Dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST });

  try {
    const res = await postService.getPosts();
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: "Error"
    })
  }
}

const postReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:

      return { ...state, posts: action.payload };

    case GET_POSTS_FAILURE:

      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default postReducer;
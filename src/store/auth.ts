import { Dispatch, Reducer } from "redux";
import loginService from "../services/login";
import axiosClient from "../utils/axiosClient";

const SET_AUTHENTICATE_REQUEST = "auth/SET_AUTHENTICATE_REQUEST";
const SET_AUTHENTICATE_SUCCESS = "auth/SET_AUTHENTICATE_SUCCESS";
const SET_AUTHENTICATE_FAILURE = "auth/SET_AUTHENTICATE_FAILURE";
const SIGN_OUT_REQUEST = "auth/SIGN_OUT_REQUEST"
const SIGN_OUT_SUCCESS = "auth/SIGN_OUT_SUCCESS"
const SIGN_OUT_FAILURE = "auth/SIGN_OUT_FAILURE"

const initialState = {
  authenticated: localStorage.getItem('token') || false,
  error: ""
}

export const setAuthenticated = (params: { username: string, password: string }, callback: () => void) => async (dispatch: Dispatch) => {
  const { username, password } = params;
  dispatch({ type: SET_AUTHENTICATE_REQUEST });

  try {
    // const res = await axiosClient.post('/login', { username, password }, {
    //   withCredentials: true,
    // });

    const res = {
      data: {
        token: "token"
      }
    }

    dispatch({
      type: SET_AUTHENTICATE_SUCCESS,
      payload: res?.data?.token,
    });

    localStorage.setItem('token', res.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: SET_AUTHENTICATE_FAILURE,
      payload: "Error When Login",
    });
  }
}

export const signOut = () => async (dispatch: Dispatch) => {
  dispatch({ type: SIGN_OUT_REQUEST });

  try {
    dispatch({
      type: SIGN_OUT_SUCCESS,
      payload: false,
    });

    localStorage.removeItem('token')
  } catch (error) {
    dispatch({
      type: SIGN_OUT_FAILURE,
      payload: "Error When Logout",
    });
  }
}

const authReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATE_SUCCESS:

      return { ...state, authenticated: !!action.payload };

    case SET_AUTHENTICATE_FAILURE:

      return { ...state, error: action.payload };

    case SIGN_OUT_SUCCESS:

      return { ...state, authenticated: action.payload };

    case SIGN_OUT_FAILURE:

      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export default authReducer;
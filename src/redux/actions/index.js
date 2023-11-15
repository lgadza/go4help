export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const GET_ME = "GET_ME";
export const GET_ME_LOADING = "GET_ME_LOADING";
export const GET_ME_ERROR = "GET_ME_ERROR";

export const registerUser = (userData) => {
    return async (dispatch) => {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const URL = process.env.REACT_APP_BE_PROD_URL;
      try {
        let response = await fetch(`${URL}/users/register`, options);
        if (response.ok) {
          const userData = await response.json();
          dispatch({
            type: REGISTER_USER,
            payload: userData,
          });
          setTimeout(() => {
            dispatch({
              type: REGISTER_USER_LOADING,
              payload: false,
            });
          }, 100);
        } else {
          console.log("error");
  
          dispatch({
            type: REGISTER_USER_LOADING,
            payload: false,
          });
          dispatch({
            type: REGISTER_USER_ERROR,
            payload: true,
          });
        }
      } catch (error) {
        console.log(error);
  
        dispatch({
          type: REGISTER_USER_LOADING,
          payload: false,
        });
  
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: true,
        });
      }
    };
  };
export const getMe = (accessToken) => {
    return async (dispatch) => {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + `${accessToken}`,
        },
      };
      const URL = process.env.REACT_APP_BE_PROD_URL;
  
      try {
        let response = await fetch(`${URL}/users/me`, options);
        if (response.ok) {
          const me = await response.json();
          dispatch({
            type: GET_ME,
            payload: me,
          });
          setTimeout(() => {
            dispatch({
              type: GET_ME_LOADING,
              payload: false,
            });
          }, 100);
        } else {
          console.log("error");
  
          dispatch({
            type: GET_ME_LOADING,
            payload: false,
          });
          dispatch({
            type: GET_ME_ERROR,
            payload: true,
          });
        }
      } catch (error) {
        console.log(error);
  
        dispatch({
          type: GET_ME_LOADING,
          payload: false,
        });
  
        dispatch({
          type: GET_ME_ERROR,
          payload: true,
        });
      }
    };
  };
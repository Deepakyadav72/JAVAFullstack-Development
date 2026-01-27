import axios from "axios";

/* API URL */
const API = "http://localhost:3000/tasks";

/* Action Types */
export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";

/* Get Tasks */
export const fetchTasks = () => async (dispatch) => {
  const res = await axios.get(API);

  dispatch({
    type: FETCH_TASKS,
    payload: res.data,
  });
};

/* Add Task */
export const addTask = (task) => async (dispatch) => {
  const res = await axios.post(API, task);

  dispatch({
    type: ADD_TASK,
    payload: res.data,
  });
};

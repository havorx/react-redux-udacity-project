import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../models/users";

interface UserState {
  status: string;
  data: Users | any;
}

const initialState: UserState = { status: "", data: {} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getListUsersReq(state) {
      state.status = "loading";
    },
    getListUsersSuccess(state, action) {
      state.status = "successfully";
      state.data = action.payload;
    },
    getListUsersFail(state) {
      state.status = "fail";
      state.data = {};
    },
    addAnswerToUsersReq(state) {
      state.status = "loading";
    },
    addAnswerToUsersSuccess(state, action) {
      state.status = "successfully";
      const answers = {
        ...state.data[action.payload.authUser].answers,
        [action.payload.qid]: action.payload.answer,
      };
      state.data[action.payload.authUser] = {
        ...state.data[action.payload.authUser],
        answers: answers,
      };
    },
    addQuestionToUsersReq(state) {
      state.status = "loading";
    },
    addQuestionToUsersSuccess(state, action) {
      state.status = "successfully";
      const author = action.payload.author;
      const questions = state.data[author].questions.concat(action.payload.id);
      state.data[action.payload.author] = {
        ...state.data[action.payload.author],
        questions: questions,
      };
    },
    initDataRequest(state) {
      state.status = "loading";
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  getListUsersSuccess,
  addAnswerToUsersSuccess,
  addQuestionToUsersSuccess,
} = actions;

export default reducer;

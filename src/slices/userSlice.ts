import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "", data: {} };

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
        ...(state.data as any)[action.payload.authUser].answers,
        [action.payload.qid]: action.payload.answer,
      };
      const auth = {
        ...(state.data as any)[action.payload.authUser],
        answers: answers,
      };
      (state.data as any)[action.payload.authUser] = auth;
    },
    addQuestionToUsersReq(state) {
      state.status = "loading";
    },
    addQuestionToUsersSuccess(state, action) {
      state.status = "successfully";
      const author = action.payload.author;
      const questions = (state.data as any)[author].questions.concat(
        action.payload.id
      );
      (state.data as any)[action.payload.author] = {
        ...(state.data as any)[action.payload.author],
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
  initDataRequest,
} = actions;

export default reducer;

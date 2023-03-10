import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { getAuthSuccessfully } from "../slices/authSlice";
import {
  getInitialDataThunk,
  saveQuestionAnswerThunk,
  saveQuestionThunk,
} from "../thunk";
import {FormatQuestion, Questions} from '../models/questions';

export const useInitialState = () => {
  const question = useSelector((state: RootState) => state.questions);
  const authUser = useSelector((state: RootState) => state.auth);
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleLogin = (userId: string) => {
    dispatch(getAuthSuccessfully(userId));
  };

  const handleInitialState = () => {
    getInitialDataThunk()(dispatch);
  };

  const handleSaveQuestion = (question: FormatQuestion) => {
    saveQuestionThunk(question)(dispatch);
  };

  const handleSaveQuestionAnswer = (
    authState: string,
    questionId: string,
    option: string
  ) => {
    saveQuestionAnswerThunk({
      authUser: authState,
      qid: questionId,
      answer: option,
    })(dispatch);
  };

  return {
    users: users.data,
    questions: question.data,
    authUser: authUser.data,
    handleLogin,
    handleInitialState,
    handleSaveQuestion,
    handleSaveQuestionAnswer,
  };
};

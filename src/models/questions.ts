export interface Questions {
  id: string;
  author: string;
  optionOne: { votes: string[]; text: string };
  optionTwo: { votes: string[]; text: string };
  timestamp: number;
}

export interface FormatQuestion {
  optionOneText: string;
  optionTwoText: string;
  author: string;
}

export interface QuestionAnswer {
  qid: string;
  answer: string;
  authUser: string;
}

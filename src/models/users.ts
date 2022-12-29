export interface Users {
  // This is the interface for the users object
  [key: string]: {
    // This is the interface for the user object
    id: string;
    name: string;
    avatarURL: string;
    answers: {
      [key: string]: string;
    };
    questions: string[];
  };
}

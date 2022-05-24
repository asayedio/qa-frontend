import { QuestionData } from './QuestionData';
interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}
export interface AppState {
  readonly questions: QuestionsState;
}
const initialQuestionState: QuestionsState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

// #region Actions

// #region Getting Unanswered Questions

// Indicates that unanswered questions are being fetched from the server
export const GETTINGUNANSWEREDQUESTIONS = 'GettingUnansweredQuestions';

export const gettingUnansweredQuestionsAction = () =>
  ({
    type: GETTINGUNANSWEREDQUESTIONS,
  } as const);

// Returns the action for when the unanswered questions have been retrieved from the server
export const GOTUNANSWEREDQUESTIONS = 'GotUnansweredQuestions';
export const gotUnansweredQuestionsAction = (questions: QuestionData[]) =>
  ({
    type: GOTUNANSWEREDQUESTIONS,
    questions: questions,
  } as const);
// #endregion Getting Unanswered Questions

// #region Viewing a question

// Indicates that question is being fetched from the server
export const GETTINGQUESTION = 'GettingQuestion';
export const gettingQuestionAction = () =>
  ({
    type: GETTINGQUESTION,
  } as const);

// Returns the action for when the questions has been retrieved from the server
export const GOTQUESTION = 'GotQuestion';
export const gotQuestionAction = (question: QuestionData | null) =>
  ({
    type: GOTQUESTION,
    question: question,
  } as const);
// #endregion Viewing a question

// #region Searching questions

// Indicates that questions is being searched
export const SEARCHINGQUESTIONS = 'SearchingQuestions';
export const searchingQuestionsAction = () =>
  ({
    type: SEARCHINGQUESTIONS,
  } as const);

// Returns the action for when the questions has been searched
export const SEARCHEDQUESTIONS = 'SearchedQuestions';
export const searchedQuestionsAction = (questions: QuestionData[]) =>
  ({
    type: SEARCHEDQUESTIONS,
    questions,
  } as const);
// #endregion Searching questions

// #endregion Actions

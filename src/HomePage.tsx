/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray1, PrimaryButton } from './styles';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions } from './QuestionData';
import {
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
  AppState,
} from './Store';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import MoonLoader from 'react-spinners/ClipLoader';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );

  /*const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);*/
  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());
      const unansweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
      /*setQuestions(unansweredQuestions);
      setQuestionsLoading(false);*/
    };
    doGetUnansweredQuestions();
  }, [dispatch]);
  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    navigate('ask');
  };
  return (
    <Page>
      <div
        css={css`
          margin: 10px auto;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <MoonLoader
          color={gray1}
          size={50}
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        />
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};

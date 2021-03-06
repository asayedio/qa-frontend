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
import { useAuth } from './Auth';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );

  React.useEffect(() => {
    let cancelled = false;
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());
      const unansweredQuestions = await getUnansweredQuestions();
      if (!cancelled) {
        dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
      }
    };
    doGetUnansweredQuestions();
    return () => {
      cancelled = true;
    };
  }, [dispatch]);
  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    navigate('ask');
  };
  const { isAuthenticated } = useAuth();
  return (
    <Page>
      <div
        css={css`
          margin: 10px auto;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        {isAuthenticated && (
          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
        )}
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

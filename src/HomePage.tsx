/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray1, PrimaryButton } from './styles';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import MoonLoader from 'react-spinners/ClipLoader';

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);
  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);
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

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
/**import './App.module.css';*/
import { Header } from './header';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { fontFamily, fontSize, gray2 } from './styles';
import { LoadingSpinner } from './spinner';
const AskPage = React.lazy(() => import('./AskPage'));

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route
            path="ask"
            element={
              <React.Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
                <AskPage />
              </React.Suspense>
            }
          />
          <Route path="signin" element={<SignInPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <HomePage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

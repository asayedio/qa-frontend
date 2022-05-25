/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './Store';
import { SearchPage } from './SearchPage';
import { AuthProvider } from './Auth';
import { SignInPage } from './SignInPage';
import { SignOutPage } from './SignOutPage';
/**import './App.module.css';*/
import { Header } from './header';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { fontFamily, fontSize, gray1, gray2 } from './styles';
import MoonLoader from 'react-spinners/ClipLoader';
import { AuthorizedPage } from './AuthorizedPage';
const AskPage = React.lazy(() => import('./AskPage'));
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
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
                  <React.Suspense
                    fallback={<MoonLoader color={gray1} size={50} />}
                  >
                    <AuthorizedPage>
                      <AskPage />
                    </AuthorizedPage>
                  </React.Suspense>
                }
              />
              <Route path="signin" element={<SignInPage action="signin" />} />
              <Route
                path="/signin-callback"
                element={<SignInPage action="signin-callback" />}
              />
              <Route
                path="signout"
                element={<SignOutPage action="signout" />}
              />
              <Route
                path="/signout-callback"
                element={<SignOutPage action="signout-callback" />}
              />
              <Route path="questions/:questionId" element={<QuestionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {/* <HomePage /> */}
          </div>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;

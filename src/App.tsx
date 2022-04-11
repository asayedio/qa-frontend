/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/**import './App.module.css';*/
import { Header } from './header';
import { HomePage } from './HomePage';
import { fontFamily, fontSize, gray2 } from './styles';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;

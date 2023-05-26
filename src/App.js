import Switcher from './components/Switcher';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import './App.css';

const theme = {
  colors : {
    white: 'white'
  },
  fonts: {
    primary: 'Quicksand'
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: georgia,serif;
  }

  input {
    font-family: georgia,serif;
  }

  textarea {
    font-family: georgia,serif;
  }
`;


const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
          {/* <Header /> */}
          <Switcher />
      </ThemeProvider>
    </div>
  );
}

export default App;

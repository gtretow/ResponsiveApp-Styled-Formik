import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    
  body{ 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    background-color: ${(props) => props.theme.body};
    overflow-x: hidden ;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
`;

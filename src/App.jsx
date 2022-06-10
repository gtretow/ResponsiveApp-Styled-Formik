import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme.js";
import { DivComponent, Button, Image } from "./Styled/base";
import cowImg from "./Cow_(Fleckvieh_breed)_Oeschinensee_Slaunger_2009-07-07.jpg";

import Table from "./Components/Table.jsx";
import TestForm from "./Components/Form.jsx";
import SideBarComponent from "./Components/SideBar.jsx";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  transition-duration: 0.5s;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <SideBarComponent />
        <DivComponent
          className="mainComponent"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <DivComponent
            width="93%"
            height="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop="10px"
          >
            <Button onClick={() => themeToggler()}>NightMode</Button>
            <p>Algo foi escrito aqui</p>
            <Image marginBottom="10px" src={cowImg} />
          </DivComponent>
          <Table className="mainComponent" theme={theme} />
          <TestForm />
        </DivComponent>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

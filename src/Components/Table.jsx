import React, { useState } from "react";
import { DivComponent } from "../Styled/base";

function Table({ theme }) {
  return (
    <DivComponent
      width="50%"
      maxWidth="980px"
      display="grid"
      gridTemplate="repeat(auto-fit, minmax(250px, 1fr));"
      gridGap="10px"
    >
      <DivComponent
        display="flex"
        border={theme == "light" ? "1px solid black" : "1px solid white"}
        transitionDuration="0.5s"
        width="100%"
        height="240px"
      >
        Componente 1
      </DivComponent>
      <DivComponent
        border={theme == "light" ? "1px solid black" : "1px solid white"}
        transitionDuration="0.5s"
        width="100%"
        height="240px"
      >
        Componente 2
      </DivComponent>
      <DivComponent
        border={theme == "light" ? "1px solid black" : "1px solid white"}
        transitionDuration="0.5s"
        width="100%"
        height="240px"
      >
        Componente 3
      </DivComponent>
      <DivComponent border="1px solid black" width="100%" height="240px">
        Componente 4
      </DivComponent>
      <DivComponent border="1px solid black" width="100%" height="240px">
        Componente 5
      </DivComponent>
      <DivComponent border="1px solid black" width="100%" height="240px">
        Componente 6
      </DivComponent>
      <DivComponent border="1px solid black" width="100%" height="240px">
        Componente 7
      </DivComponent>
      <DivComponent border="1px solid black" width="100%" height="240px">
        Componente 8
      </DivComponent>
      <DivComponent border="1px solid black" width="100%" height="240px">
        Componente 9
      </DivComponent>
    </DivComponent>
  );
}

export default Table;

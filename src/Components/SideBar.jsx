import React from "react";
import { DivComponent, SideBarContent, SideBar, Link } from "../Styled/base";

function SideBarComponent() {
  return (
    <DivComponent
      className="sideBar"
      height="100%"
      width="7%"
      minWidth="250px"
      background="#11101B"
      position="fixed"
      top="0"
      left="0"
      display="flex"
      flexDirection="column"
      padding="6px 14px"
      color="#fff"
    >
      <DivComponent
        className="logo"
        display="flex"
        justifyContent="center"
        fontSize="1.5em"
      >
        Nome na sideBar
      </DivComponent>
      <SideBar>
        <SideBarContent>
          <Link href="#">
            <span>Inicio</span>
          </Link>
        </SideBarContent>
        <SideBarContent>
          <Link href="#">
            <span>Meio</span>
          </Link>
        </SideBarContent>
        <SideBarContent>
          <Link href="#">
            <span>Fim</span>
          </Link>
        </SideBarContent>
        <SideBarContent>
          <Link href="#">
            <span>Sobre Nós</span>
          </Link>
        </SideBarContent>
        <SideBarContent>
          <Link href="#">
            <span>Outro</span>
          </Link>
        </SideBarContent>
      </SideBar>
    </DivComponent>
  );
}

export default SideBarComponent;

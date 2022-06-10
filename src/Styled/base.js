import styled, { css } from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

export const InputForm = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const DivComponent = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: ${(props) => props.display || ""};
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: ${(props) => props.alignItems || ""};
  flex-direction: ${(props) => props.flexDirection || ""};
  margin-top: ${(props) => props.marginTop || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  border: ${(props) => props.border || ""};
  grid-template-columns: ${(props) => props.gridTemplate || ""};
  grid-gap: ${(props) => props.gridGap || ""};
  max-width: ${(props) => props.maxWidth || ""};
  margin: ${(props) => props.margin || ""};
  position: ${(props) => props.position || ""};
  transition-duration: ${(props) => props.transitionDuration || ""};
  background: ${(props) => props.background || ""};
  top: ${(props) => props.top || ""};
  left: ${(props) => props.left || ""};
  right: ${(props) => props.right || ""};
  padding: ${(props) => props.padding || ""};
  font-size: ${(props) => props.fontSize || ""};
  color: ${(props) => props.color || ""};
  min-width: ${(props) => props.minWidth || ""};
  min-height: ${(props) => props.minHeight || ""};
  margin-bottom: ${(props) => props.marginBottom || ""};
  margin-left: ${(props) => props.marginLeft || ""};

  @media (max-width: 1051px) {
    &.mainComponent {
      margin-left: 20%;
    }

    &.formComponent {
      width: 50%;
    }

    button {
      width: 40%;
    }
  }

  @media (max-width: 800px) {
    &.sideBar {
      height: 5%;
      width: auto;
      background: #11101b;
      position: relative;
      display: flex;
      color: #fff;
      justify-content: center;
      text-align: center;
      padding-left: 40px;
      padding-top: 10px;
    }

    &.logo {
      display: none;
    }

    &.formComponent {
      width: 100%;
      margin-bottom: 0;
    }
    &.mainComponent {
      margin-left: 0%;
    }
  }

  @media (max-width: 375px) {
    width: 66%;
  }
`;

export const Button = styled.button``;

export const Image = styled.img`
  width: 10%;
  height: 80%;
  min-height: 200px;
  margin-bottom: ${(props) => props.marginBottom || ""};

  @media (max-width: 1051px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    order: -1;
  }
`;

export const SideBar = styled.ul`
  font-size: 1.5em;
  padding: 0;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  margin-left: 11%;
`;

export const SideBarContent = styled.li`
  list-style: none;
  position: relative;
  height: 50px;
  width: 100%;

  &&:hover {
    background: #fff;

    ${Link} {
      color: #11101d;
      transition-duration: 0.5s;
    }
  }
`;

import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClic}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;

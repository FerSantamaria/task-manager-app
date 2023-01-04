import styled from "styled-components";
import { StyledCard } from "../components/Card.styled";
import { StyledContentWrapper } from "../layouts/ContentWrapper.styled";

export const InfoContainer = styled(StyledContentWrapper)`
  padding-right: 32px;
  align-items: center;
`
export const InfoCard = styled(StyledCard)`
  align-items: flex-start;
  flex-direction: column;
  width: fit-content;

  h1{
    width: 100%;
    text-align: center;
  }
`
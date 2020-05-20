import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImage from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Logon = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    width: 70%;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #fff;
      text-decoration: none;
      display: block;
      margin-top: 20px;

      &:hover {
        color: ${shade(0.3, '#FFFFFF')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 20px;

    &:hover {
      color: ${shade(0.3, '#FF9000')};
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
`;

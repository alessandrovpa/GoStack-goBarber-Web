import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: boolean;
}

const toastTypes = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #00c853;
    color: #ebf8ff;
  `,
  error: css`
    background: #d50000;
    color: #ebf8ff;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100vw;

  > svg {
    margin: 4px 12px 0 0;
  }

  ${(props) => toastTypes[props.type || 'info']}

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 15px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    background: transparent;
    border: 0;
    position: absolute;
    right: 15px;
    top: 20px;
    opacity: 0.6;
    color: inherit;
  }

  & + div {
    margin-top: 5px;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      svg {
        margin-top: 0;
      }
      button {
        top: 17px;
      }
    `}
`;

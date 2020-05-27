import styled, { css } from 'styled-components';

import Tooltip from '../../tooltip';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  border: 2px solid #232129;
  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}
  &:focus-within {
    color: #ff9000;
    border-color: #ff9000;
  }

  input {
    color: #fff;
    background: transparent;
    border: 0;
    flex: 1;
    width: 100%;
  }

  > svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 10px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 5px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

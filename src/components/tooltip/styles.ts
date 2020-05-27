import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  cursor: pointer;

  span {
    visibility: hidden;
    position: absolute;
    background: #ff9000;
    padding: 8px;
    opacity: 0;
    width: 160px;
    transition: 0.4s;
    border-radius: 5px;

    left: 50%;
    bottom: calc(100% + 12px);
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0px 6px;
      border-color: #ff9000 transparent;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

import styled from 'styled-components';
import { WindowSize } from './helper/helper';

export const Main = styled.div`
  height: ${({height}: WindowSize) => `${height}px`};
  width: ${({width}: WindowSize) => `${width}px`};
`;

export const Sale = styled.div`
`;
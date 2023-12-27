import { fonts, getTheme } from '@styles/theme';
import styled from 'styled-components';

export const AdditionalTokenInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const AdditionalTokenInfoItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48px;
  padding: 13px 16px;
  background-color: ${getTheme('neutral', '_9')};
  border-radius: 30px;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 12px;
  }

  .title {
    display: inline-flex;
    flex-shrink: 0;
    color: ${getTheme('neutral', 'a')};
    ${fonts.body2Reg};
  }

  .value {
    display: inline-block;
    max-width: 155px;
    color: ${getTheme('neutral', '_1')};
    ${fonts.body2Reg};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

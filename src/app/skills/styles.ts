/* eslint-disable indent */

import { Title } from '@/styles/utils';
import styled from 'styled-components';

import { AreaProps } from '@/types';

type ActiveAreaProps = {
  activeArea: AreaProps;
};

export const Container = styled.main`
  padding: 0 3rem 12rem 3rem;

  > div h3 {
    font-size: 2rem;
  }
`;

export const StyledTitle = styled.h3`
  ${Title};
  margin: 3rem 0 6rem 0;
  font-size: 2.8rem;
`;

export const Skills = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-flow: row wrap;

  list-style: none;
`;

export const SkillsSection = styled.section`
  text-align: center;
`;

export const SkillsSectionHeader = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 524px) {
    flex-direction: column;
  }
`;

export const AreaSelector = styled.button<ActiveAreaProps>`
  padding: 1rem;

  font-size: 1.7rem;
  font-family: '__Plus_Jakarta_Sans_fd0c7c',
    '__Plus_Jakarta_Sans_Fallback_fd0c7c';

  color: ${({ theme, id, activeArea }) =>
    activeArea === id ? theme.colors.alt : theme.colors.text};

  border: 1.5px solid
    ${({ theme, id, activeArea }) =>
      activeArea === id ? theme.colors.alt : theme.colors.text};

  border-radius: 10px;
  background: transparent;

  cursor: pointer;

  @media screen and (max-width: 524px) {
    padding: 0;

    border: none;
  }
`;
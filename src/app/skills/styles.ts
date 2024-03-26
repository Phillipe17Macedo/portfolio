/* eslint-disable indent */

import { Title } from '@/styles/utils';
import styled from 'styled-components';

export const Container = styled.main`
  padding: 2rem 5rem 0 5rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem 12rem 2rem;
  }

  > p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.altText};

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    a {
      color: ${({ theme }) => theme.colors.alt};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const TitleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const StyledTitle = styled.h2`
  ${Title};

  @media screen and (max-width: 768px) {
    font-size: 3.25rem;
  }
`;

export const Skills = styled.ul`
  display: flex;
  gap: 2rem;
  flex-flow: row wrap;

  list-style: none;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
    justify-content: center;
  }
`;

export const SkillsSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
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

export const Subtitle = styled.h4`
  font-size: 3rem;
  margin-bottom: 0.75rem;
`;

export const Languages = styled.div`
  margin-top: 2rem;

  ul {
    margin-top: 2rem;
    padding-left: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-size: 1.75rem;
      color: ${({ theme }) => theme.colors.altText};

      span {
        color: ${({ theme }) => theme.colors.text};
      }

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;

"use client";

import { styled } from "styled-components";

export const SkillContainer = styled.div`
  position: relative;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 336px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillItem = styled.p`
  display: flex;
  align-items: center;

  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  padding: 16px;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

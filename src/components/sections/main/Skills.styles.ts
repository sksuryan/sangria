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

  font-size: 20px;
  line-height: 32px;
  font-weight: 400;

  padding: 16px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
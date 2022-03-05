import styled from 'styled-components';

export const XPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 32px;

  @media (max-width: 550px) {
    padding: 12px;
  }
`;

export const XP = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  font-family: 'Poppins';

  padding: 1.5rem 0;

  .title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }

  .details,
  .dates,
  .role {
    font-weight: 400;
    font-size: 16px;

    margin-left: calc(24px + 0.75rem);
  }

  .role {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .dates {
    margin-bottom: 1rem;
    color: #6e6e6e;
  }

  .details {
    color: #2e2e2e;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 18px;
    }

    .details,
    .dates,
    .role {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    .title {
      font-size: 16px;
    }
  }
`;

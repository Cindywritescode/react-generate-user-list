import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  & input {
    font: inherit;
    display: flex;
    margin: 0.5rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
      border-color: #4f005f;
    }
  }

  & label {
    display: flex;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & p {
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    list-style-type: none;
    background: #F0AD46;
    color: white;
    margin-bottom: 0
  }
`;

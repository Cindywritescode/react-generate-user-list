import styled from 'styled-components';

const PrimaryButton = styled.div`
  & button {
    display: block;
    padding: 0.5rem 1.5rem;
    background: #4f005f;
    color: white;
    font: inherit;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;

    &:hover {
      background: blueviolet;
    }
  }
`;

export const Button = ({
  type,
  children
}) => (
  <PrimaryButton>
    <button
      type={type || 'button'}
    >{children}
    </button>
  </PrimaryButton>
);
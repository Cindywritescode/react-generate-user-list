import styled from 'styled-components';

const PrimaryButton = styled.div`
  & button {
    display: block;
    padding: 0.5rem 1.5rem;
    background: #8A7351;
    color: white;
    font: inherit;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;

    &:hover {
      background: #F0AD46;
    }
  }
`;

export const Button = ({
  type,
  children,
  onClick
}) => (
  <PrimaryButton>
    <button
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  </PrimaryButton>
);
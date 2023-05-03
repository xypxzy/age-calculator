import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid var(--light-grey);
  border-radius: 5px;
  background: var(--bg-main);

  font-family: var(--font-family);
  font-size: 24px;
  color: var(--color-primary);

  width: 80px;
  padding: 5px 10px;
  margin-right: 20px;

  &.invalid {
    border-color: var(--primary-light-red);
  }
  
  ::placeholder {
    color: var(--color-placeholder)
  }
`


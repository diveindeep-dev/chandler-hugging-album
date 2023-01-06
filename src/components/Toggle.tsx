import { Fragment } from 'react';
import styled from 'styled-components';

interface ToggleProps {
  isChecked: boolean;
  handleToggle: () => void;
}

const Ball = styled.div`
  position: absolute;
  height: 22px;
  width: 22px;
  top: 2px;
  left: 2px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;

const Label = styled.label`
  position: relative;
  margin: 0 5px;
  width: 50px;
  height: 26px;
  background-color: #e2e8f0;
  border-radius: 50px;
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label} ${Ball} {
    transform: translateX(24px);
  }
  &:checked + ${Label} {
    background-color: #2cb76f;
  }
`;

function Toggle(props: ToggleProps) {
  const { isChecked, handleToggle } = props;

  return (
    <Fragment>
      <Input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id={`switch`}
      />
      <Label htmlFor="switch">
        <Ball />
      </Label>
    </Fragment>
  );
}

export default Toggle;

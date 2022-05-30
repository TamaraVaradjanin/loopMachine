import { Button } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

type Props = {
  icon?: React.ReactElement;
  isDisabled?: boolean;
  onClick: MouseEventHandler;
};

function ControlButton({
  icon,
  isDisabled,
  onClick,
}: Props): React.ReactElement {
  return (
    <Button
      borderRadius={"2xl"}
      borderColor="black"
      borderWidth={4}
      isDisabled={isDisabled}
      onClick={onClick}
      bg="gray.300"
      minW={16}
      minH={14}
    >
      {icon}
    </Button>
  );
}

export default ControlButton;

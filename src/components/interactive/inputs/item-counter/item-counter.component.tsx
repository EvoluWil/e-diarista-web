import React from 'react';
import { ItemCounterContainer, CircleButton } from './item-counter.styles';

interface ItemCounterProps {
  label: string;
  plural: string;
  value: number;
  onAdd: () => void;
  onSub: () => void;
}

export const ItemCounter: React.FC<ItemCounterProps> = ({
  label,
  plural,
  onAdd,
  onSub,
  value = 0
}) => {
  return (
    <ItemCounterContainer>
      <CircleButton onClick={onSub}>
        <i className="ed-minus" />
      </CircleButton>
      <span>
        {value} {value > 1 ? plural : label}
      </span>
      <CircleButton onClick={onAdd}>
        <i className="ed-plus" />
      </CircleButton>
    </ItemCounterContainer>
  );
};

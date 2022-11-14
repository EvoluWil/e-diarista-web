import {
  AccordionActions,
  AccordionDetails,
  AccordionSummary
} from '@mui/material';
import React from 'react';
import { Icon } from '../icon/icon.component';
import { AccordionStyled } from './data-list.styles';

interface DataListProps {
  header?: JSX.Element;
  body?: JSX.Element;
  actions?: JSX.Element;
}

export const DataList: React.FC<DataListProps> = ({
  header,
  body,
  actions
}) => {
  return (
    <AccordionStyled>
      <AccordionSummary expandIcon={<Icon name="expand_more" />}>
        {header}
      </AccordionSummary>
      <AccordionDetails>{body}</AccordionDetails>
      {!!actions && <AccordionActions>{actions}</AccordionActions>}
    </AccordionStyled>
  );
};

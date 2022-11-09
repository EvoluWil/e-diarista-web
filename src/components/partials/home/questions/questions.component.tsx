import { useState } from 'react';
import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography
} from '@mui/material';
import {
  Wave,
  SectionContainer,
  SectionTitle,
  SectionSubTitle,
  AccordionStyled
} from './questions.styles';
import { questions } from 'data/constants/questions.constant';
import { Icon } from 'components/ui/icon/icon.component';

export const Questions = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const changeOpenAccordion = (accordionIndex: number): void => {
    if (activeAccordion === accordionIndex) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionIndex);
    }
  };

  return (
    <SectionContainer>
      <Wave src="/img/home/waves.svg" />
      <Container>
        <SectionTitle>Ainda está com dúvidas ?</SectionTitle>
        <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>

        {questions.map((item, index) => (
          <AccordionStyled
            key={item.question}
            expanded={activeAccordion === index + 1}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<Icon name="expand_more" />}>
              <Typography color="primary">{item.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </AccordionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

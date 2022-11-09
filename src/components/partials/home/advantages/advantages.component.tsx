import React from 'react';
import { Container, ListItem, ListItemAvatar } from '@mui/material';
import { advantages } from 'data/constants/advantages.constant';
import {
  AvatarStyled,
  ListDivider,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
  GradientBackground
} from './advantages.style';

export const Advantages = () => {
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-diaristas?</SectionTitle>
        <ListStyle>
          {advantages.map((item, index) => (
            <React.Fragment key={item.icon}>
              {!!index && <ListDivider />}
              <ListItem>
                <ListItemAvatar>
                  <AvatarStyled>
                    <i className={item.icon} />
                  </AvatarStyled>
                </ListItemAvatar>
                <ListItemTextStyled
                  primary={item.title}
                  secondary={item.description}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

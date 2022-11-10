import React from 'react';
import { SystemProps } from '@mui/system';
import { capitalize } from '@mui/material';
import {
  UserCardContainer,
  AvatarStyled,
  UserName,
  RatingStyled,
  UserDescription
} from './user-card.styles';

interface UserCardProps {
  name: string;
  picture: string;
  rating: number;
  description?: string;
  sx?: SystemProps;
  isRating?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({
  name,
  picture,
  rating,
  description,
  sx,
  isRating
}) => {
  return (
    <UserCardContainer sx={sx} rating={isRating ? 1 : 0}>
      <AvatarStyled src={picture}>{name[0].toUpperCase()}</AvatarStyled>
      <RatingStyled readOnly value={rating} />
      <UserName>{capitalize(name)}</UserName>
      <UserDescription>{description}</UserDescription>
    </UserCardContainer>
  );
};

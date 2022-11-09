import { Box, SxProps, Theme } from '@mui/material';

interface IconProps {
  name: string;
  sx?: SxProps<Theme>;
}

export const Icon: React.FC<IconProps> = ({ name, sx }) => {
  return (
    <Box component="i" className="material-icons" sx={sx}>
      {name}
    </Box>
  );
};

import {
  Toolbar,
  Container,
  MenuList,
  Divider,
  MenuItem,
  IconButton
} from '@mui/material';
import { RoundedButton } from 'components/ui/buttons/rounded-button/rounded-button.component';
import { Icon } from 'components/ui/icon/icon.component';
import { Link } from 'components/ui/navigation/link/link.component';
import { useIsMobile } from 'hooks/is-mobile.hook';
import { useState } from 'react';
import {
  ButtonsContainer,
  HeaderAppBar,
  HeaderDrawer,
  HeaderLogo
} from './header.styles';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="Logo E-Diarista" />
        </Link>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <ButtonsContainer>
          <Link component={RoundedButton} href="/register">
            Seja um(a) diarista
          </Link>
          <Link
            component={RoundedButton}
            mui={{ variant: 'text' }}
            href="/sign-in"
          >
            Login
          </Link>
        </ButtonsContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export const HeaderMobile: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          onClick={() => setDrawerOpen(true)}
          edge="start"
          color="primary"
        >
          <Icon name="menu" />
        </IconButton>
        <Link href="/">
          <HeaderLogo src="/img/logos/logo.svg" alt="Logo E-Diarista" />
        </Link>
        <HeaderDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onClick={() => setDrawerOpen(false)}
        >
          <MenuList>
            <Link href="/" component={MenuItem}>
              Login
            </Link>
            <Divider />
            <Link href="/register" component={MenuItem}>
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

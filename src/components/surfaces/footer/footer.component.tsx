import { Box, List, Typography } from '@mui/material';
import { Link } from 'components/interactive/navigation/link/link.component';
import {
  FooterContainer,
  FooterGrid,
  FooterTitle,
  FooterListItem,
  SocialContainer,
  AppList,
  SocialButton,
  FooterSocialList
} from './footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href="/find-diarista"
                mui={{ color: 'inherit', variant: 'body2' }}
              >
                Encontrar um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                href="/find-diarista"
                mui={{ color: 'inherit', variant: 'body2' }}
              >
                Seja um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: 'inherit', variant: 'body2' }}>
                Por que usar o E-Diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: 'inherit', variant: 'body2' }}>
                Principais duvidas
              </Link>
            </FooterListItem>
          </List>
        </div>
        <Box maxWidth={400}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" mt={2}>
            E-Diarista te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>
        <SocialContainer>
          <Box>
            <FooterTitle>Baixe nosso aplicativo</FooterTitle>
            <AppList>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  <img src="/img/logos/app-store.png" alt="App Store" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer">
                  <img src="/img/logos/google-play.png" alt="Google Play" />
                </a>
              </li>
            </AppList>
          </Box>
          <Box>
            <FooterTitle>Redes Sociais</FooterTitle>
            <FooterSocialList>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="ed-facebook-f" />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="ed-instagram" />
                </SocialButton>
              </FooterListItem>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="ed-youtube" />
                </SocialButton>
              </FooterListItem>
            </FooterSocialList>
          </Box>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

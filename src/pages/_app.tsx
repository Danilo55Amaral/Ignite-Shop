import type { AppProps } from 'next/app';
import { Container, Header } from '../styles/pages/app';
import { globalStyles } from './../styles/global';
import logoImg from '../assets/logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="logo" />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}

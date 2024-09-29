import type { AppProps } from 'next/app';
import initCometChat from '../lib/cometChatInit';
import '../app/globals.css';  // Update this line

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initCometChat();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
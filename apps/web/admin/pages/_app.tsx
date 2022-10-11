import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as UrqlProvider } from 'urql';
import { client, ssr } from '../util/urql';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { Preflight } from '@xstyled/emotion';

function CustomApp({ Component, pageProps }: AppProps) {
  if (pageProps['urqlState']) {
    ssr.restoreData(pageProps['urqlState']);
  }

  return (
    <>
      <Head>
        <title>Welcome to admin!</title>
      </Head>
      <main className="app">
        <UrqlProvider value={client}>
          <MantineProvider>
            <NotificationsProvider position="top-right">
              <ModalsProvider>
                <Preflight />
                <Component {...pageProps} />
              </ModalsProvider>
            </NotificationsProvider>
          </MantineProvider>
        </UrqlProvider>
      </main>
    </>
  );
}

export default CustomApp;

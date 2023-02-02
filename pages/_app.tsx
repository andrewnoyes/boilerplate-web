import { AppShell, ColorScheme, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { SpotlightProvider } from '@mantine/spotlight';
import type { AppProps } from 'next/app';
import { Fragment, useState } from 'react';
import { AppHead, AppHeader, AppNavbar } from '../components';

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'dark',
  });
  const [opened, setOpened] = useState(false);

  return (
    <Fragment>
      <AppHead />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <SpotlightProvider shortcut={['mod + K']} actions={[]}>
          <AppShell
            padding="md"
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
            navbar={<AppNavbar hidden={!opened} />}
            header={
              <AppHeader
                opened={opened}
                onToggleOpened={() => setOpened(!opened)}
                colorSchemeProps={{
                  colorScheme,
                  onToggle: () =>
                    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark'),
                }}
              />
            }
          >
            <Component {...pageProps} />
          </AppShell>
        </SpotlightProvider>
      </MantineProvider>
    </Fragment>
  );
}

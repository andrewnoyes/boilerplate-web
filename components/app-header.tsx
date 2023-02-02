import {
  Burger,
  Group,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';
import { siteConfig } from '../utils';
import {
  ColorSchemeToggle,
  ColorSchemeToggleProps,
} from './color-scheme-toggle';
import { SearchControl } from './search-control';

export interface AppHeaderProps {
  opened: boolean;
  onToggleOpened: () => void;
  colorSchemeProps: ColorSchemeToggleProps;
}

export const AppHeader = (props: AppHeaderProps) => {
  const { opened, onToggleOpened, colorSchemeProps } = props;
  const theme = useMantineTheme();
  const spotlight = useSpotlight();

  return (
    <Header height={48} p="md">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={onToggleOpened}
              size="sm"
              color={theme.colors.gray[6]}
            />
          </MediaQuery>
          <Text>{siteConfig.name}</Text>
        </Group>
        <Group>
          <SearchControl onClick={() => spotlight.openSpotlight()} />
          <ColorSchemeToggle {...colorSchemeProps} />
        </Group>
      </div>
    </Header>
  );
};

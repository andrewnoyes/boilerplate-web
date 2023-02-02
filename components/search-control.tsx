import { createStyles, Group, Text, UnstyledButton } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons';
import { useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    height: 32,
    paddingLeft: theme.spacing.sm,
    paddingRight: 5,
    borderRadius: theme.radius.md,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors.dark[5], 0.85)
          : theme.fn.rgba(theme.colors.gray[0], 0.35),
    },
  },

  shortcut: {
    fontSize: 11,
    lineHeight: 1,
    padding: '4px 7px',
    borderRadius: theme.radius.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    }`,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },
}));

export interface SearchControlProps {
  onClick(): void;
}

export const SearchControl = (props: SearchControlProps) => {
  const { classes } = useStyles();
  const os = useOs();
  const [modifier, setModifier] = useState('Ctrl');

  useEffect(() => {
    if (os === 'undetermined' || os === 'macos') {
      setModifier('⌘');
    }
  }, [os]);

  return (
    <UnstyledButton className={classes.root} {...props}>
      <Group spacing="xs">
        <IconSearch size={14} stroke={1.5} />
        <Text size="sm" color="dimmed" pr={80}>
          Search
        </Text>
        <Text weight={700} className={classes.shortcut}>
          {modifier} + K
        </Text>
      </Group>
    </UnstyledButton>
  );
};

import { Anchor, Container, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    marginLeft: -16,
    marginRight: -16,
    marginBottom: -16,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export const AppFooter = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Anchor<'a'>
          href="https://github.com/andrewnoyes/boilerplate-web"
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          color="dimmed"
          sx={{ fontFamily: 'monospace' }}
        >
          BOILERPLATE!
        </Anchor>
      </Container>
    </div>
  );
};

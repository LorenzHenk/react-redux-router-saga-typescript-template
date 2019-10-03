import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
    },
    content: {
      background: theme.palette.background.paper,
      padding: theme.spacing(3),
      minHeight: 'calc( 100vh - 48px)',
    },
  }),
);

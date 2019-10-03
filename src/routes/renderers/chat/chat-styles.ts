import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default,
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  }),
);

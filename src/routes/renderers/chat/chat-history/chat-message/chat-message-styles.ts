import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid #699',
      borderRadius: '5px',
      margin: '16px',
      padding: '8px',
    },
    left: {
      textAlign: 'left',
      background: theme.palette.grey[300],
    },
    right: {
      textAlign: 'right',
      background: theme.palette.grey[200],
    },
    author: {},
    date: {},
    message: {},
  }),
);

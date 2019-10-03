import { createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'auto',
    },
  }),
);

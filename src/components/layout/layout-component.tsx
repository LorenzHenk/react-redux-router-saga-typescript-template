import React from 'react';

import { useStyles } from './layout-styles';
import { AppBar, Toolbar } from '@material-ui/core';

import logo from '../../assets/logo.svg';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="relative">
        <Toolbar variant="dense">
          <img src={logo} alt="Logo" height={48} />
        </Toolbar>
      </AppBar>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const MemoizedLayout = React.memo(Layout);

export default MemoizedLayout;

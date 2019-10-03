import React from 'react';

import { RouteComponentProps } from 'react-router';

const NotFoundComponent: React.FC<RouteComponentProps> = props => (
  <div>
    <h1>Not found!</h1>
    <pre>{JSON.stringify(props.location, null, 2)}</pre>
  </div>
);

export default NotFoundComponent;

import React from 'react';

import { isDashboard } from '../utils';
import Dashboard from './Dashboard';
import Client from './Client';

export default function Layout({ children }) {
  return (
    <>
      {isDashboard() ? (
        <Dashboard>{children}</Dashboard>
      ) : (
        <Client>{children}</Client>
      )}
    </>
  );
}

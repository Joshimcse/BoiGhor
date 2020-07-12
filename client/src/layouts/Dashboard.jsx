import React from 'react';
import Header from '../components/Dashboard/Header';

export default function Dashboard({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

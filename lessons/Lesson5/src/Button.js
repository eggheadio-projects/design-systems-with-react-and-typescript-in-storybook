import React from 'react';

export const Button = ({ bg, children }) => (
  <button style={{ backgroundColor: bg }}> {children}</button>
);
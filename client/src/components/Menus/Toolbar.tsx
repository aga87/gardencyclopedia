import React from 'react';

/* eslint react/prop-types: 0 */
const Toolbar: React.FC = ({ children }): JSX.Element => (
  <nav className='c-toolbar'>{children}</nav>
);

export default Toolbar;

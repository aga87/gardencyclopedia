import React from 'react';
import Icon from './Icon';

type LogoProps = {
  variant?: 'primary' | 'light';
};

const Logo = ({ variant = 'primary' }: LogoProps): JSX.Element => {
  let className = 'logo t1';
  if (variant !== 'primary') {
    className = `logo logo--${variant} t1`;
  }

  return (
    <div className={className}>
      <Icon name='seedling' />
    </div>
  );
};

export default Logo;

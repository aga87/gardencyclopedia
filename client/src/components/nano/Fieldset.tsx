import React from 'react';

export type FieldsetProps = {
  legend: string;
};

/* eslint react/prop-types: 0 */
const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children
}): JSX.Element => (
  <fieldset className='fieldset'>
    <legend className='fieldset__legend'>{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;

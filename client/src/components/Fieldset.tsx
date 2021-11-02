import React from 'react';

type FieldsetProps = {
  legend: string;
};

/* eslint react/prop-types: 0 */
const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children
}): JSX.Element => (
  <fieldset className="c-fieldset">
    <legend className="c-fieldset__legend">{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
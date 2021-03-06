import React from 'react';
import { capitalize } from '../../../utils/text-utils';

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps): JSX.Element => (
  <div className='tag'>{capitalize(tag)}</div>
);

export default Tag;

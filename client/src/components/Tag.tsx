import React from 'react';
import { capitalize } from '../utils/text-utils';

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps): JSX.Element => (
  <span className="tag s1">{capitalize(tag)}</span>
);

export default Tag;

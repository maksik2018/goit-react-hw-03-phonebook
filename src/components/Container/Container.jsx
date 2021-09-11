import React from 'react';
import PropTypes from 'prop-types';
import { Div } from '../Container/Container.styled';

export default function Container({ children }) {
  return <Div>{children}</Div>;
 }

Container.propTypes = {
  children: PropTypes.node.isRequired,
};


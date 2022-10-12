import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h1 className="Counter__title">{title}</h1>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

import React from 'react';

const Section = ({ title, children }) => (
  <>
    <h1 className="Counter__title">{title}</h1>
    {children()}
  </>
);

export default Section;

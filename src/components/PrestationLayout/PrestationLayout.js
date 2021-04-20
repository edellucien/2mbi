import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import PageHeader from '../PageHeader';

const propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const PrestationLayout = ({ page, children }) => {
  return (
    <>
      <PageHeader page={page} />
      <Container maxWidth="lg">
        <div>{children}</div>
      </Container>
    </>
  );
};

PrestationLayout.propTypes = propTypes;

export default PrestationLayout;

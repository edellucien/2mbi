import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PageHeader from '../PageHeader';
import theme from '../../themes/2mbi-theme';

import { mobileWrapper, wrapper } from './PrestationLayout.scss';

const propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const PrestationLayout = ({ page, children }) => {
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <PageHeader page={page} />
      <Container maxWidth="lg">
        <div className={isVerySmall ? mobileWrapper : wrapper}>{children}</div>
      </Container>
    </>
  );
};

PrestationLayout.propTypes = propTypes;

export default PrestationLayout;

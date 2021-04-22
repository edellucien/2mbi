import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MUITheme from '../../themes/2mbi-theme';
import pages from '../../content/pages';

const propTypes = {
  page: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  imageWrapper: {
    position: 'relative',
    right: '0px',
    overflow: 'hidden',
    width: '100%',
    height: '450px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '320px',
    },
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '450px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  titleWrapper: {
    backgroundColor: theme.colors.whiteBackgroundTransparent,
    color: theme.colors.primaryBlack,
    position: 'absolute',
    top: '25px',
    right: 0,
    zIndex: '2',
    maxWidth: '465px',
    padding: '15px 25px',
    '& h2': {
      margin: 0,
    },
    '& h3': {
      margin: 0,
    },
  },
  titleDesktopWrapper: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  titleMobileWrapper: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

const PageHeader = ({ page }) => {
  const classes = useStyles();
  const { info, mobileInfo, backgroundImage } = pages[page];
  const isMobile = useMediaQuery(MUITheme.breakpoints.down('xs'));

  return (
    <Container maxWidth="lg" className={classes.container}>
      <div className={classes.imageWrapper}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(/static/images/headers/${
              isMobile ? 'mobile/' : ''
            }${backgroundImage})`,
          }}
        />
        <div
          className={`${classes.titleWrapper} ${classes.titleDesktopWrapper}`}
        >
          {info}
        </div>
        {mobileInfo ? (
          <div
            className={`${classes.titleWrapper} ${classes.titleMobileWrapper}`}
          >
            {mobileInfo}
          </div>
        ) : null}
      </div>
    </Container>
  );
};

PageHeader.propTypes = propTypes;

export default PageHeader;

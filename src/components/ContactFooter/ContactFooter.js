import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContactComp from '../Contact';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    backgroundColor: theme.colors.secondaryLightGray,
  },
  textWrapper: {
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',
    color: theme.colors.secondaryText,
    '& a': {
      color: theme.colors.secondaryText,
      '&:hover': {
        color: theme.colors.primaryRed,
      },
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      padding: '20px',
    },
  },
}));

const ContactFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="lg" className={classes.textWrapper}>
        <ContactComp />
      </Container>
    </div>
  );
};

export default ContactFooter;

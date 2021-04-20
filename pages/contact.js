import React from 'react';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';
import PrestationLayout from '../src/components/PrestationLayout';
import ContactComp from '../src/components/Contact';
import Layout from '../src/components/Layout';

const useStyles = makeStyles(theme => ({
  googleMapWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 0 20px 0',
    '& iframe': {
      border: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  contactWrapper: {
    display: 'flex',
    padding: '20px 0',
    '& a': {
      color: '#444',
      '&:hover': {
        color: '#CA0B00',
      },
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Layout>
      <PrestationLayout page="contact">
        <div className={classes.contactWrapper}>
          <ContactComp />
        </div>
        <div className={classes.googleMapWrapper}>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.9993223425886!2d7.593195916054586!3d48.37974927924367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791497009904d7b%3A0x8f14f84da5082708!2s2M.B.I.!5e0!3m2!1sen!2sfr!4v1591865028388!5m2!1sen!2sfr"
            width="100%"
            height="380px"
            className="googleMap"
            display="initial"
            position="relative"
          />
        </div>
      </PrestationLayout>
    </Layout>
  );
};

export default Contact;

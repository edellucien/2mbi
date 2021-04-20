import React from 'react';
import { IoIosBusiness } from 'react-icons/io';
import {
  MdPermContactCalendar,
  MdEmail,
  MdSubject,
  MdLocalPhone,
} from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  contact: {
    width: '50%',
    '& a': {
      textDecoration: 'none',
    },
    '& p': {
      display: 'flex',
      alignItems: 'center',
      marginBlockEnd: '0.5em',
      marginBlockStart: '0.5em',
      '& svg': {
        height: '20px',
        width: '20px',
        paddingRight: '5px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingBottom: '10px',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contact}>
        <p>
          <IoIosBusiness />
          <b>Accès à nos ateliers</b>
        </p>
        <p>ZAC des Nations</p>
        <p>4, rue d&apos;Italie</p>
        <p>67230 BENFELD</p>
      </div>
      <div className={classes.contact}>
        <p>
          <MdPermContactCalendar />
          <b>Contact</b>
        </p>
        <p>
          <MdLocalPhone />
          tel:&nbsp;<a href="tel:0388741090">03 88 74 10 90</a>
        </p>
        <p>
          <MdSubject />
          fax:&nbsp;03 90 57 65 95
        </p>
        <p>
          <MdEmail />
          e-mail:&nbsp;<a href="mailto:2mbi@2mbi.fr">2mbi@2mbi.fr</a>
        </p>
      </div>
    </>
  );
};

export default Contact;

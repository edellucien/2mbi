import React from 'react';
import Iframe from 'react-iframe';
import { IoIosBusiness } from 'react-icons/io';
import {
  MdPermContactCalendar,
  MdEmail,
  MdSubject,
  MdLocalPhone,
} from 'react-icons/md';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PrestationLayout from '../src/components/PrestationLayout';
import Layout from '../src/components/Layout';
import theme from '../src/themes/2mbi-theme';

import { googleMapWrapper, contact, contactWrapper } from './contact.scss';

const Contact = () => {
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Layout>
      <PrestationLayout page="contact">
        <div
          className={contactWrapper}
          style={{
            display: isVerySmall ? 'block' : 'flex',
          }}
        >
          <div
            className={contact}
            style={{
              width: isVerySmall ? '100%' : '50%',
              paddingBottom: isVerySmall ? '10px' : '0',
            }}
          >
            <p>
              <IoIosBusiness />
              <b>Accès à nos ateliers</b>
            </p>
            <p>ZAC des Nations</p>
            <p>4, rue d&apos;Italie</p>
            <p>67230 BENFELD</p>
          </div>
          <div
            className={contact}
            style={{
              width: isVerySmall ? '100%' : '50%',
              paddingBottom: isVerySmall ? '10px' : '0',
            }}
          >
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
        </div>
        <div className={googleMapWrapper}>
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

import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from '../../themes/2mbi-theme';
import pages from '../../content/pages';

const PageHeader = ({ page }) => {
  const { title, backgroundImage } = pages[page];
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  // change gradient style on mobile
  return (
    <>
      <div
        style={{
          backgroundImage: isVerySmall
            ? ''
            : 'linear-gradient(90deg, #fafafa 25%, #ffffff00 80%)',
          width: '100%',
          height: '300px',
          position: 'absolute',
          left: '0px',
          lineHeight: '28px',
          zIndex: '1',
        }}
      />
      <div
        style={{
          width: isVerySmall ? '100%' : '80%',
          height: isVerySmall ? '280px' : '300px',
          position: 'absolute',
          right: '0px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '400px',
            top: '-70px',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </div>
      <div
        style={{
          backgroundImage: isVerySmall
            ? ''
            : 'linear-gradient(-90deg, #fafafa 5%, #ffffff00 35%)',
          width: '100%',
          height: '300px',
          position: 'absolute',
          right: '0px',
          lineHeight: '28px',
          zIndex: '1',
        }}
      />
      <div
        style={{
          position: 'absolute',
          padding: isVerySmall ? '10px 0px 0px 20px' : '50px 0px 0px 100px',
          color: isVerySmall ? 'white' : '#444',
          zIndex: '2',
        }}
      >
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default PageHeader;

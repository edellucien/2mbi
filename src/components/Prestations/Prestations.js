import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '../Card';
import theme from '../../themes/2mbi-theme';
import prestationRows from '../../content/prestations';

import { root } from './Prestations.scss';

const Prestations = () => {
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      {prestationRows.map(content => {
        return (
          <Box
            m={5}
            key={content.title}
            style={{
              margin: isVerySmall ? '0 40px' : '40px',
            }}
          >
            <Grid container spacing={isVerySmall ? 0 : 4} className={root}>
              {content.map(card => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ marginBottom: isVerySmall ? '20px' : 0 }}
                  key={card.title}
                >
                  <Card
                    url={card.url}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    content={card.description}
                    fullWidth={card.width === 12}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </div>
  );
};

export default Prestations;

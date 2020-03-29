import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '../Card';
import theme from '../../themes/2mbi-theme';
import prestationRows from '../../content/presations';

const useStyles = makeStyles(() => ({
  root: { flexGrow: 1 },
}));

const Prestations = () => {
  const classes = useStyles();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div>
      {prestationRows.map(content => {
        return (
          <Box m={5}>
            <Grid
              container
              xs={12}
              spacing={isVerySmall ? 0 : 3}
              className={classes.root}
            >
              {content.map(card => (
                <Grid
                  item
                  xs={12}
                  sm={card.width || 4}
                  style={{ marginBottom: isVerySmall ? '20px' : 0 }}
                  key={card.title}
                >
                  <Card
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

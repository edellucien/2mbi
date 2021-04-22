import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card';
import MUITheme from '../../themes/2mbi-theme';
import prestationRows from '../../content/prestations';

const useStyles = makeStyles(theme => ({
  box: {
    margin: '40px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  grid: {
    flexGrow: 1,
  },
  gridContent: {
    marginBottom: 0,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '20px',
    },
  },
}));

const Prestations = () => {
  const classes = useStyles();
  const isVerySmall = useMediaQuery(MUITheme.breakpoints.down('xs'));

  return (
    <div>
      {prestationRows.map(content => {
        return (
          <Box m={5} key={content.title} className={classes.box}>
            <Grid
              container
              spacing={isVerySmall ? 0 : 4}
              className={classes.grid}
            >
              {content.map(card => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className={classes.gridContent}
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

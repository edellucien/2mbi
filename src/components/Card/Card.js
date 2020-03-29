import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

const defaultProps = {
  fullWidth: false,
};

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    position: 'relative',
    justifyContent: 'space-between',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 5,
    paddingTop: '56.25%', // 16:9
  },
  fullWidthMedia: {
    paddingTop: '15%',
  },
}));

function DocCard({ title, imageUrl, fullWidth }) {
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{
        cursor: 'pointer',
        backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.08)' : '',
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          className={fullWidth ? classes.fullWidthMedia : classes.media}
          image={imageUrl}
          title={title}
        />

        {isHovered ? (
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              color: 'white',
              paddingTop: '20px',
              backgroundColor: 'rgb(220,220,220,0)',
            }}
          >
            Test
          </div>
        ) : null}

        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {title}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

DocCard.propTypes = propTypes;
DocCard.defaultProps = defaultProps;

export default DocCard;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function Chips(props) {
  const { classes } = props;
  return (
    <div className="chip-input">
      <p>Focus blue box</p>
      <div className={classes.root}>
        {props.chips.map((x, idx) => (
          <Chip
            icon={
              idx % 2 === 0 ? (
                <FontAwesomeIcon icon={faDog} spin />
              ) : (
                <FontAwesomeIcon icon={faCat} pulse />
              )
            }
            label={x}
            key={idx}
            className={classes.chip}
            color={idx % 2 === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </div>
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);

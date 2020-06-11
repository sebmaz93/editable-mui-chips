import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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

const Chip = ({ label, handleChange, handleAdd, focus }) => (
  <div className="chip-custom" tabIndex="0" onClick={focus}>
    <input
      className="chip-custom-input"
      type="text"
      value={label}
      onChange={handleChange}
      onKeyPress={handleAdd}
      ref={ref => (this.chipInput = ref)}
    />
    <span className="chip-custom-span">{label}</span>
  </div>
);

class Chips extends React.PureComponent {
  state = {
    chips: ['Jax', 'Tom', 'Zeus'],
    inputValue: '',
  };
  handleChange = name => e => {
    this.setState({ inputValue: e.target.value });
  };
  handleAdd = e => {
    if (e.which === 13 || e.keyCode === 13) {
      this.setState({
        chips: [...this.state.chips, e.target.value],
        inputValue: '',
      });
      return false;
    }
    return true;
  };

  focus = () => {
    this.chipInput.focus();
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="chip-input">
        <p>Focus blue box</p>
        <div className={classes.root}>
          {this.state.chips.map((x, idx) => (
            <Chip
              label={x}
              handleChange={this.handleChange(x)}
              handleAdd={this.handleAdd}
              focus={this.focus}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Chips);

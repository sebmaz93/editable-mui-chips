import React, { Component } from 'react';

import ChipsContainer from './Chips';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class App extends Component {
  state = {
    value: '#Jax #Tom #Zeus',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { value } = this.state;
    const chips =
      value.length > 0
        ? value
            .trim()
            .split(' ')
            .map(x => {
              if (x.charAt(0) === '#') {
                return x.trim().slice(1);
              } else {
                return '';
              }
            })
            .filter(z => z.length > 0)
        : [];
    return (
      <>
        <div className="container" tabIndex="-1">
          <FormControl className="input">
            <InputLabel htmlFor="chips-input">Chips Input</InputLabel>
            <Input
              id="chips-input"
              value={this.state.value}
              onChange={this.handleChange('value')}
            />
          </FormControl>
          <ChipsContainer chips={chips} />
        </div>
      </>
    );
  }
}

export default App;

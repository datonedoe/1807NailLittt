import React, { Component } from 'react';
import Keyboard from 'react-virtual-keyboard';

class VirtualPad extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Keyboard
          value={this.state.input}
          name="keyboard"
          options={{
            type: 'input',
            layout: 'num',
            alwaysOpen: true,
            usePreview: false,
            useWheel: false,
            stickyShift: false,
            appendLocally: true,
            color: 'light',
            updateOnChange: true,
            initialFocus: true,
            display: {
              accept: 'Submit',
            },
          }}
          onChange={this.onInputChanged}
          onAccepted={this.onInputSubmitted}
          ref={k => (this.keyboard = k)}
        />
      </div>
    );
  }
}

export default VirtualPad;

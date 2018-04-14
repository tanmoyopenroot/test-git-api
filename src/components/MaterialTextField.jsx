import React from 'react';
import TextField from 'material-ui/TextField';

class MaterialTextField extends React.Component {
  render() {
    let textFieldStyle = {
      boxSizing: 'border-box',
      margin: 'auto',
      width: '100%'
    };

    textFieldStyle = Object.assign({}, textFieldStyle, this.props.style || {});
    const hintText = this.props.hintText;
    const value = this.props.value;

    return (
      <TextField
        {...this.props}
        value={value}
        hintText={hintText}
        style={textFieldStyle}
      >
      </TextField>
    );
  }
}

export default MaterialTextField;

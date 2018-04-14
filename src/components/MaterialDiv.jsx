import React from 'react';
import Paper from 'material-ui/Paper';

class MaterialDiv extends React.Component {
  render() {
    let divStyle = {
      boxSizing: 'border-box',
      margin: 'auto',
      width: '80%',
      padding: '20px 15px',
      marginTop: '20px'
    };

    divStyle = Object.assign({}, divStyle, this.props.style || {});

    return (
      <Paper
        {...this.props}
        style={divStyle}
      >
        {this.props.children}
      </Paper>
    );
  }
}

export default MaterialDiv;

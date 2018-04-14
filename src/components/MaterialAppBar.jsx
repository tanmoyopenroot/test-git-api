import React from 'react';
import AppBar from 'material-ui/AppBar';

class MaterialAppBar extends React.Component {
  render() {
    const divStyle = Object.assign(this.props.style || {});

    return (
      <AppBar
        {...this.props}
        style={divStyle}
      />
    );
  }
}

export default MaterialAppBar;

import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class MaterialSnackbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  render() {
    return (
      <Snackbar
        {...this.props}
        open={this.state.open}
        message={this.props.message || this.state.message || ''}
      />
    );
  }

  show(message) {
    this.setState({
      message,
      open: true
    });
  }

  dismiss() {
    this.setState({
      open: false,
      message: null
    });
  }
}

export default MaterialSnackbar;
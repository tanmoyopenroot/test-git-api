import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MaterialDiv from './../components/MaterialDiv';
import MaterialTextField from './../components/MaterialTextField';
import MaterialSnackbar from './../components/MaterialSnackbar';
import { getRepo } from './../api/index'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      search: true
    }
  }

  render() {
    const textStyle = {
      width: '80%',
      padding: '0px 10px',
      margin: '0px 20px'
    }

    const btnStyle = {
      width: '10%',
      margin: '0px 30px'
    }

    return (
      <MaterialDiv>
        <MaterialTextField
          hintText="Search Repo"
          value={this.state.query}
          style={textStyle}
          onChange={(e) => {
            this.setState({query: e.target.value})
          }}
        />
        <RaisedButton
          label="Search"
          primary={true}
          style={btnStyle}
          onClick={(e) => {
            this.setState({ search: true }, () => {
              this._getRepo();
            })
          }}
        />
        <MaterialSnackbar
          ref='snackbar'
        />
      </MaterialDiv>
    );
  }

  _getRepo() {
    const query = this.state.query;
    const search = this.state.search;

    if (!search) {
      return;
    }

    if (!query.length) {
      this.refs.snackbar.show('Enter any keyword to be searched');
      return;
    }

    getRepo((err, repos) => {
      if (err) {
        this.refs.snackbar.show('Oops! An error occurred while fetching the data');
      } else {
        this.setState({ repos: repos, search: false });
        this.props.handleData(repos);
        this.refs.snackbar.show('Data fetched!');
      }
    }, query);

    setTimeout(() => {
      this.refs.snackbar.dismiss();
    },3000)
  }
}

SearchContainer.propTypes = {
  handleData: PropTypes.func
};

export default SearchContainer;

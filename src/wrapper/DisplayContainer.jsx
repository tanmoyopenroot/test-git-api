import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import sortBy from 'sort-by';
import MaterialDiv from './../components/MaterialDiv';
import Card from './../components/Card';

class DisplayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
  }

  render() {
    const containerStyle = {
      minHeight: 120
    }

    const optionStyle = {
      float: 'right'
    }

    return (
      <MaterialDiv
        style={containerStyle}
      >
        <div
          style={optionStyle}
        >
          {this._renderOptions()}
        </div>
        {this._renderRepo()}
      </MaterialDiv>
    );
  }

  _renderRepo() {
    const data = this.props.data;
    
    const noRepoStyle = {
      width: '300px',
      margin: 'auto',
      marginTop: '35px',
      fontWeight: 'bold'
    }
    
    return (
      <div>
      {
        data ? 
          this._renderProcessedData() 
        : 
          <div
            style={noRepoStyle}
          >
            <p>No Repository</p>
          </div>
      }
    </div>
    );
  }

  _renderOptions() {
    return (
      <SelectField
        floatingLabelText="Sort"
        value={this.state.value}
        onChange={(event, index, value) => this._handleSelectChange(value)}
      >
        <MenuItem
          value={1}
          primaryText="Stars"
        />
        <MenuItem
          value={2}
          primaryText="Watch Count"
        />
        <MenuItem
          value={3}
          primaryText="Score"
        />
        <MenuItem
          value={4}
          primaryText="Name"
        />
        <MenuItem
          value={5}
          primaryText="Created At"
        />
        <MenuItem
          value={6}
          primaryText="Updated At"
        />
      </SelectField>
    );
  }

  _handleSelectChange(value) {
    this.setState({value})
  }
  
  handleScroll() {
    console.log("SC");
    const heightBound = window.height * 0.8;
    if (heightBound > window.scrollY) {
        this.props.handlePageEnd(true);
    }
  }

  _renderProcessedData() {
    const value = this.state.value;
    let data = this.props.data.items;

    for(let i in data) {
      data[i].name = data[i].name.toLowerCase();
    }

    if (value === 1) {
      data.sort(sortBy('stargazers_count'));
    } else if (value === 2) {
      data.sort(sortBy('watchers_count'));
    } else if (value === 3) {
      data.sort(sortBy('score'));
    } else if (value === 4) {
      data.sort(sortBy('name'));
    } else if (value === 5) {
      data.sort(sortBy('created_at'));
    } else if (value === 6) {
      data.sort(sortBy('updated_at'));
    }

    return (
      <div
        onScroll={this.handleScroll}
      >
        <List>
          <Subheader>List Of Repository</Subheader>
          {
            data.map((d, i) => {
              return ( 
                <div
                  key={i}
                >
                  <Card
                    name={d.name}
                    stargazersCount={d.stargazers_count}
                    description={d.description}
                    language={d.language}
                    url={d.owner.avatar_url}
                  />
                  <Divider />
                </div>
              );
            })
          }
        </List>
      </div>
    );
  }
}

DisplayContainer.propTypes = {
  data: PropTypes.object,
  handlePageEnd: PropTypes.func
};

export default DisplayContainer;

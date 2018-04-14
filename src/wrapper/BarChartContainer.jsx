import React from 'react';
import PropTypes from 'prop-types';
import MaterialDiv from './../components/MaterialDiv';
import BarChartComponent from './../components/BarChartComponent';

class BarChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.data ? this._processData() : null
    );
  }

  _processData() {
    let data = this.props.data.items;
    let processeddata = [];
    let languageSet = [];
    let repoSet = [];
    let language = '';
    let languageIndex = 0;

    for(let i in data) {
      language = data[i].language;
      if (!languageSet.includes(language) && language) {
        languageSet.push(language);
        repoSet.push(1);
      } else {
        languageIndex = languageSet.indexOf(language);
        repoSet[languageIndex] = repoSet[languageIndex] + 1;
      }
    }

    for(let i = 0; i < languageSet.length; i++) {
      processeddata.push({text: languageSet[i], value: repoSet[i]});
    }

    const containerStyle = {
      width: '100%'
    };

    return (
      <MaterialDiv>
        <div
          style={containerStyle}> 
          <BarChartComponent
            data={processeddata}
            title='Language VS Number of Repository'
          />
        </div>
      </MaterialDiv>

    );
  }
}

BarChartContainer.propTypes = {
  data: PropTypes.object
};

export default BarChartContainer;

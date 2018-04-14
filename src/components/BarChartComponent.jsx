import React from 'react';
import PropTypes from 'prop-types';
import BarChart from 'react-bar-chart';
import Subheader from 'material-ui/Subheader';

const BarChartComponent = (props) => {
  const data = props.data;
  const title = props.title;
  const margin = {top: 20, right: 50, bottom: 30, left: 50};
  const width = 900;

  return (
    <div style={{width: '100%'}}> 
      <Subheader>{title}</Subheader>
      <BarChart
        ylabel=''
        width={width}
        height={400}
        margin={margin}
        data={data}
      />
    </div>
  );
}

BarChartComponent.propTypes = {
  data: PropTypes.any,
  title: PropTypes.string
};

export default BarChartComponent;

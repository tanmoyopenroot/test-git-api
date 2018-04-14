import React from 'react';
import MaterialAppBar from './components/MaterialAppBar';
import SearchContainer from './wrapper/SearchContainer';
import DisplayContainer from './wrapper/DisplayContainer';
import BarChartContainer from './wrapper/BarChartContainer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageEnd: false
    };
    this.handleData = this.handleData.bind(this);
    this.handlePageEnd = this.handlePageEnd.bind(this);
  }

  componentDidMount() {
    this._setPageTitle();
  }

  _setPageTitle() {
    document.title = 'Github API Intregation';
  }

  render() {
    return (
      <div>
        <MaterialAppBar 
          title="Github API Intregration"
        />
        <SearchContainer
          handleData={this.handleData}
        />
        <BarChartContainer
          data={this.state.data}
        />
        <DisplayContainer
          data={this.state.data}
          handlePageEnd={this.handlePageEnd}
        />
      </div>
    );
  }

  handleData(data) {
    this.setState({ data });
  }

  handlePageEnd(pageEnd) {
    this.setState({ pageEnd });
  }
}

export default App;

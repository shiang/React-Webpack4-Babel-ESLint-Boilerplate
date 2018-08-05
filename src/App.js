import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{`Welcome to ${this.props.text}`}</h1>
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.string,
};

export default App;

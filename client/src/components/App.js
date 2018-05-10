import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  nextItem,
  fetchGreetings
} from '../actions'

class App extends Component {

  componentDidMount() {
    fetchGreetings(this.props.dispatch)
  }

  render() {
    let content = <div className="loader"></div>

    if (!this.props.isLoading) {
      content = (
        <div className="wrap">
          <div className="content">
            {this.props.content.length > 0 ? this.props.content[this.props.index] : null }
          </div>

          <div id="button">
            <button onClick={() => this.props.dispatch(nextItem())}>Next</button>
          </div>
      </div>
      )
    }
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  index: state.greetingReducer.index,
  content: state.greetingReducer.content,
  isLoading: state.greetingReducer.isLoading
})

export default connect(mapStateToProps)(App);

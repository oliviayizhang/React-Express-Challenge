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
    let content = <div>Loading...</div>
    if (!this.props.isLoading) {
      content = (<div>
        <div className="content">
          {this.props.content.length > 0 ? this.props.content[this.props.index] : null }
        </div>

        <button onClick={() => this.props.dispatch(nextItem())}>Next</button>
      </div>)
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

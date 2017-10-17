import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TimeAgo from 'react-timeago';
import './App.css';

import Remove from 'react-icons/lib/go/x';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: ''
    };
  }
  componentDidMount() {
    this.props.fetchPalindromes();
  }

  onChange = e => {
    this.setState({ string: e.target.value });
  };

  onKeyPress = e => {
    if (e.key === 'Enter' && this.state.string !== '') {
      this.props.addPalindrome(this.state.string);
    }
  };

  onCheck = () => {
    if (this.state.string !== '') {
      this.props.addPalindrome(this.state.string);
    }
  };

  onRemove = id => {
    this.props.removePalindrome(id);
  };

  renderList = () =>
    this.props.palindromes.map(item => (
      <div
        className="list-group-item list-group-item-action flex-column align-items-start"
        key={item._id}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.string}</h5>

          <div>
            <small className="mr-3">
              <TimeAgo date={item.date} />
            </small>
            <span className="mr-3">
              {item.isPalindrome ? (
                <span
                  className="btn btn-outline-success btn-sm"
                  style={{ width: 50 }}
                >
                  <small>True</small>
                </span>
              ) : (
                <span
                  className="btn btn-outline-danger btn-sm"
                  style={{ width: 50 }}
                >
                  <small>False</small>
                </span>
              )}
            </span>
            <span
              onClick={() => {
                this.onRemove(item._id);
              }}
            >
              <Remove />
            </span>
          </div>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="App">
        <div className="container d-flex align-items-stretch flex-column">
          <div className="mb-3">
            <div className="alert alert-light" style={{ padding: 0 }}>
              <small>
                This application checks whether <strong>any permutation</strong>{' '}
                of an input string is <strong>a palindrome</strong>
              </small>
            </div>
            <div className="input-group">
              <input
                className="form-control form-control-lg"
                placeholder="Type something here"
                type="text"
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                value={this.state.string}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-secondary btn-lg"
                  type="button"
                  onClick={this.onCheck}
                >
                  Check
                </button>
              </span>
            </div>
          </div>
          <div className="mt-auto palindrome-list">
            <div className="">
              <div className="list-group" role="tablist">
                {this.renderList()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ palindromes }) {
  return { palindromes };
}

export default connect(mapStateToProps, actions)(App);

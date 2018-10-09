import React, { Component } from 'react';

class ErrorBoundary extends Component {
  static displayName = 'ErrorBoundary';

  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (error) {
      return <ErrorBoundary error={error} errorInfo={errorInfo} />;
    }

    return children;
  }
}

export default ErrorBoundary;
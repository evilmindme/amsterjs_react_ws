import React, { Component } from 'react';


import ErrorsForm from './ErrorsForm';
import ErrorBoundary from './ErrorBoundary';

class ErrorsDemo extends Component {
  render() {
    return (
      <div>
      	<ErrorBoundary>
        <h2>Error Handling</h2>
        <ErrorsForm />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ErrorsDemo;

import React from 'react';

export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.log(
      '%c Caught an error!',
      'padding: 5px; background: #e5e0d4; color: #ff1f1f;'
    );
    console.log(error);
  }

  render() {
    return this.state.hasError ? (
      <h1 {...this.props}>Something is wrong</h1>
    ) : (
      this.props.children
    );
  }
}

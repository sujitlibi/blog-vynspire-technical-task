import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

/**
 * ErrorBoundary catches rendering errors in the component tree
 * and shows a simple fallback UI. This prevents the whole app
 * from crashing due to a single component error.
 */

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-2xl mb-2">Something went wrong</h2>
          <p className="mb-4">
            Please try refreshing the page. If the problem persists, contact
            support.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

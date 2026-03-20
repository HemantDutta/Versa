import { Component } from "react";
import { Link } from "react-router-dom";

/**
 * ErrorBoundary — catches render errors and shows a branded fallback.
 * Wrap around routes or individual sections.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white font-[Jost] flex flex-col items-center justify-center px-6 text-center">
        {/* icon */}
        <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mb-6">
          <i className="fa-solid fa-triangle-exclamation text-red-400 text-xl" />
        </div>

        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
          Something <span className="text-versa-one italic">Went Wrong</span>
        </h1>

        <p className="text-neutral-400 text-sm md:text-base max-w-md mb-2">
          An unexpected error occurred while rendering this page.
        </p>

        {/* error detail (collapsed) */}
        {this.state.error && (
          <details className="mb-8 max-w-md w-full text-left">
            <summary className="text-neutral-600 text-xs uppercase tracking-widest font-bold cursor-pointer hover:text-neutral-400 transition-colors">
              Error details
            </summary>
            <pre className="mt-2 p-3 bg-[#141414] border border-white/10 rounded-lg text-xs text-red-300 overflow-auto max-h-40">
              {this.state.error.toString()}
            </pre>
          </details>
        )}

        {/* actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={this.handleRetry}
            className="bg-versa-one text-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="border-2 border-white/10 hover:border-white/30 text-white font-semibold text-sm uppercase tracking-widest px-6 py-3.5 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;

import { Component, type ErrorInfo, type ReactNode } from "react";

interface RouteErrorBoundaryProps {
  children: ReactNode;
  fallback: (reset: () => void) => ReactNode;
}

interface RouteErrorBoundaryState {
  failed: boolean;
}

export class RouteErrorBoundary extends Component<RouteErrorBoundaryProps, RouteErrorBoundaryState> {
  state: RouteErrorBoundaryState = { failed: false };

  static getDerivedStateFromError(): RouteErrorBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unable to load route chunk:", error, info);
  }

  reset = () => this.setState({ failed: false });

  render() {
    return this.state.failed ? this.props.fallback(this.reset) : this.props.children;
  }
}

import React from "react";

export default function useIsMounted() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * A Higher Order Component (HOC) that wraps a component and only renders it if the component is mounted.
   * This is useful for components that rely on browser-specific APIs or need to be rendered only on the client side.
   *
   * @param Component - The component to wrap.
   * @returns A new component that only renders the original component if it is mounted.
   * @example
   * const MyComponent = withClientMounted(MyComponent, {
   *   fallback: LoadingComponent,
   * });
   * // MyComponent will only render if the component is mounted.
   * // If not mounted, it will render LoadingComponent instead.
   */
  function withClientMounted<P>(
    Component: React.ComponentType<P>,
    options?: {
      fallback?: React.ComponentType<P>;
    },
  ): React.FC<React.PropsWithChildren<P>> {
    return function WrappedComponent(props: React.PropsWithChildren<P>) {
      if (!mounted) {
        if (options?.fallback) {
          const Fallback = options.fallback;
          return <Fallback {...props} />;
        }
        return null;
      }
      return <Component {...props} />;
    };
  }

  return {
    mounted,
    withClientMounted,
  };
}

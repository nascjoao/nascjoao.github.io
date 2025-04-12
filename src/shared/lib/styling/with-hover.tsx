import { twMerge } from "tailwind-merge";
/**
 * A High Order Component (HOC) that adds hover styles to a component.
 * This HOC handles the hover state and applies the appropriate styles, considering
 * the current theme and any other relevant props.
 */
export default function withHover<P>(
  Component: React.FC<React.HTMLAttributes<P>>,
): React.FC<React.HTMLAttributes<P>> {
  return function WrappedComponent({
    className,
    ...props
  }: React.HTMLAttributes<P>) {
    return (
      <Component
        {...props}
        className={twMerge(
          className,
          "hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer",
        )}
      />
    );
  };
}

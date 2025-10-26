import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  p: (props) => <p className="mt-4" {...props} />,
  h1: (props) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-2xl font-semibold mt-5 mb-2" {...props} />,
  h4: (props) => <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

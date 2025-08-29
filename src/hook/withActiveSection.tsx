import React from "react";
import { useActiveSection } from "./useActiveSection";

export function withActiveSection<P>(
  Component: React.ComponentType<P & { activeSection: string }>,
  id: string[],
  options?: IntersectionObserverInit
) {
  const Wrapped: React.FC<P> = (props) => {
    const activeSection = useActiveSection(id, options);
    return <Component {...props} activeSection={activeSection} />;
  };
  return Wrapped;
}

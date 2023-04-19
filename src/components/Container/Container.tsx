import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
}

const OuterContainer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={clsx('sm:px-8', className)} ref={ref} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  },
);

const InnerContainer = forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        ref={ref}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  },
);

const Container = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  },
);

export default Container;

OuterContainer.displayName = 'Outer';
InnerContainer.displayName = 'Inner';
Container.displayName = 'Container';

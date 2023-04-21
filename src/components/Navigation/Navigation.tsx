import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { ClassAttributes, Fragment, HTMLAttributes, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNavItem = ({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) => {
  return (
    <li>
      <Popover.Button as={Link} className="block py-2" to={path}>
        {children}
      </Popover.Button>
    </li>
  );
};

//eslint-disable-next-line
const MobileNavigation = (props: any) => (
  <Popover {...props}>
    <Popover.Button className="grou h-full flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
      Menu
      <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
    </Popover.Button>
    <Transition.Root>
      <Transition.Child
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          focus
        >
          <div className="flex flex-row-reverse items-center justify-between">
            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
              <XMarkIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            </Popover.Button>
            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Navigation
            </h2>
          </div>
          <nav className="mt-6">
            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
              <MobileNavItem path="/about">About</MobileNavItem>
              <MobileNavItem path="/resume">Resume</MobileNavItem>
              <MobileNavItem path="/portfolio">Portfolio</MobileNavItem>
            </ul>
          </nav>
        </Popover.Panel>
      </Transition.Child>
    </Transition.Root>
  </Popover>
);

const NavItem = ({ path, children }: { path: string; children: ReactNode }) => {
  const isActive = useLocation().pathname === path;

  return (
    <li>
      <Link
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}
        to={path}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement>,
) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem path="/about">About</NavItem>
        <NavItem path="/resume">Resume</NavItem>
        <NavItem path="/portfolio">Portfolio</NavItem>
      </ul>
    </nav>
  );
};

const Navigation = () => {
  return (
    <div className="flex flex-1 justify-end md:justify-center">
      <MobileNavigation className="pointer-events-auto md:hidden" />
      <DesktopNavigation className="pointer-events-auto hidden md:block" />
    </div>
  );
};

export default Navigation;

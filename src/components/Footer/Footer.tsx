import { Link } from 'react-router-dom';

import Inner from '../Container';
// eslint-disable-next-line
import Outer from '../Container';

const Footer = () => {
  return (
    <footer className="mt-32">
      <Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <Link
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/resume"
                >
                  Resume
                </Link>
                <Link
                  className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Sam Salasky. All rights
                reserved.
              </p>
            </div>
          </Inner>
        </div>
      </Outer>
    </footer>
  );
};

export default Footer;

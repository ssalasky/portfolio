import Container from '../Container';
import Navigation from '../Navigation';
import ThemeSwitch from '../ThemeSwitch';
import HeaderAvatar from './HeaderAvatar';

const Header = () => {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-col"
      style={{ height: '64px' }}
    >
      <div className="top-0 z-10 h-16 pt-6">
        <Container className="w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
                <HeaderAvatar />
              </div>
            </div>
            <Navigation />
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

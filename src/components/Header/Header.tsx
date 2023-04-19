import Container from '../Container';
import Navigation from '../Navigation';
import ThemeSwitch from '../ThemeSwitch';

const Header = () => {
  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container className="w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Navigation />
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

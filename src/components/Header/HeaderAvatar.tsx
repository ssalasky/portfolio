import { Link } from 'react-router-dom';

import CameraPhoto from '../../images/camera.png';

const HeaderAvatar = () => {
  return (
    <Link
      aria-label="home"
      className="block h-16 w-16 origin-left pointer-events-auto"
      to="/"
    >
      <img
        alt=""
        className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
        sizes="2.25rem"
        src={CameraPhoto}
      />
    </Link>
  );
};

export default HeaderAvatar;

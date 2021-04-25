import { useRouter } from 'next/router';
import NavItem from './NavItem';
const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="my-5">
        <NavItem url="/" title="Widgets" />
        <NavItem url="/about" title="About" />
      </div>
    </>
  );
};

export default NavBar;

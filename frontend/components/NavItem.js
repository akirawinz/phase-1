import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
const NavItem = ({ url, title }) => {
  const router = useRouter();
  let btnClass;
  if (router.pathname === url) {
    btnClass = classNames('bg-blue-500', 'text-white');
  } else {
    btnClass = classNames('text-blue-500');
  }
  return (
    <Link href={url}>
      <a className={`"inline-block px-4 py-1 mr-1.5 rounded-lg " ${btnClass}`}>
        {title}
      </a>
    </Link>
  );
};

export default NavItem;

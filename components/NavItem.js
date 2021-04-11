import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
const NavItem = ({ url, title }) => {
  const router = useRouter();
  const btnClassActive = classNames(
    ' inline-block',
    'px-4',
    'py-1',
    'mr-1.5',
    'rounded-lg',
    'bg-blue-500',
    'text-white'
  );
  const btnClassNotActive = classNames(
    ' inline-block',
    'px-4',
    'py-1',
    'mr-1.5',
    'rounded-lg',
    'text-blue-500'
  );
  let btnClass;
  if (router.pathname === url) {
    btnClass = btnClassActive;
  } else {
    btnClass = btnClassNotActive;
  }

  return (
    <Link href={url}>
      <a className={btnClass}>{title}</a>
    </Link>
  );
};

export default NavItem;

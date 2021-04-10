import Link from 'next/link';
import { useRouter } from 'next/router';
const NavBar = () => {
  const router = useRouter();
  return (
    <>
      <div className="my-5">
        <Link href="/">
          <a
            className={`inline-block px-4 py-1 mr-1.5 rounded-lg  ' ${
              router.pathname == '/'
                ? 'bg-blue-500 text-white'
                : ' text-blue-500'
            }`}
          >
            Widgets
          </a>
        </Link>

        <Link href="/about">
          <a
            className={`inline-block px-4 py-1 mr-1.5 rounded-lg  ' ${
              router.pathname == '/about'
                ? 'bg-blue-500 text-white'
                : ' text-blue-500'
            }`}
          >
            About
          </a>
        </Link>
      </div>
    </>
  );
};

export default NavBar;

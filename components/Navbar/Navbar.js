import Link from 'next/link';
import css from './Navbar.scss';

const Navbar = () => (
  <>
    <div className={css.navbar}>
      <a href="/">2mbi</a>
      <div>
        <ul className="test">
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/about"><a>About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Navbar;
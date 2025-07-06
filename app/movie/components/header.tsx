import Link from "next/link";
import { SearchBar } from "./searchBar";

export const Header: React.FC = () => {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6 text-white">
      <Link href="/" className="text-white no-underline">
        <h1 className="text-3xl font-bold">Movie Browser</h1>
      </Link>
      <SearchBar />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <p className="hover:underline">
              Home
            </p>
          </li>
          <li>
            <p className="hover:underline">
              About
            </p>
          </li>
          <li>
            <p className="hover:underline">
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

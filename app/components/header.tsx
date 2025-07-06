import { SearchBar } from "../movies/components/searchBar";

export const Header: React.FC = () => {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-6 text-white">
      <a href="/" className="text-white no-underline">
        <h1 className="text-3xl font-bold">Movie Browser 9000</h1>
      </a>
      <SearchBar />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center gap-8 font-bold text-xs">
      <Link className="text-gray-800" href="/dashboard">
        Dashboard
      </Link>
      <Link className="text-gray-400 hover:text-gray-800" href="/my-tasks">
        My-Tasks
      </Link>
      <Link className="text-gray-400 hover:text-gray-800" href="/portfolios">
        Portfolios
      </Link>
      <Link className="text-gray-400 hover:text-gray-800" href="/reporting">
        Reporting
      </Link>
      <Link className="text-gray-400 hover:text-gray-800" href="/goals">
        Goals
      </Link>
    </div>
  );
};

export default Navbar;

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center py-4  ">
      <div className="flex gap-5">
        <a
          href="/headstarter_01_portfolio/"
          className="text-lg text-primary no-underline hover:underline"
        >
          About
        </a>
        <a
          href="/headstarter_01_portfolio/projects"
          className="text-lg text-primary no-underline hover:underline"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

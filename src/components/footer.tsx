export default function Footer() {
  return (
    <footer className="flex justify-center gap-4 items-center py-2 m-0 bg-gray-200">
      <div className="flex gap-5">
        <a
          href="https://enkhbold470.github.io/headstarter_01_portfolio/"
          className="text-sm text-primary no-underline hover:underline"
        >
          About
        </a>
        <a
          href="https://enkhbold470.github.io/headstarter_01_portfolio/projects"
          className="text-sm text-primary no-underline hover:underline"
        >
          Projects
        </a>
        <a
          href="https://enk.icu"
          target="_blank"
          className="text-sm text-primary no-underline hover:underline"
        >
          Previous Website
        </a>
        <a
          href="https://github.com/enkhbold470/headstarter_01_portfolio"
          target="_blank"
          className="text-sm text-primary no-underline hover:underline"
        >
          Clone this site
        </a>

        <a
          href="https://enkhbold470.github.io/headstarter_01_portfolio/license"
          className="text-sm text-primary "
        >
          © MIT License{" "}
        </a>
      </div>
    </footer>
  );
}

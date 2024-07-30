import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandInstagram,
} from "react-icons/tb";

export default function Socials() {
  return (
    <div className="flex flex-row justify-center gap-2 my-2">
      <a
        className="text-primary"
        rel="me"
        href="https://www.linkedin.com/in/enkhbold-g-b09a58142/"
        target="_blank"
      >
        <TbBrandLinkedin size={25} />
      </a>
      <a
        className="text-primary"
        rel="me"
        href="https://github.com/enkhbold470"
        target="_blank"
      >
        <TbBrandGithub size={25} />
      </a>
      <a
        className="text-primary"
        rel="me"
        href="https://instagram.com/en.khy"
        target="_blank"
      >
        <TbBrandInstagram size={25} />
      </a>
      <a
        className="text-primary"
        rel="me"
        href="https://youtube.com/TTFRobotics"
        target="_blank"
      >
        <TbBrandYoutube size={25} />
      </a>
    </div>
  );
}

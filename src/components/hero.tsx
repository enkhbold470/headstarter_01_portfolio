import Socials from "./socials";
export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center my-10 text-desc">
      <img
        className="rounded-full "
        src="https://avatars.githubusercontent.com/u/53986637?v=4"
        alt=""
      />

      <div className="flex flex-col items-center gap-1 lg:w-1/3 md:1/2 w-[70%]">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-primary pt-10">
          Enkhbold Ganbold
        </h1>
        <h1 className="text-base lg:text-xl font-thin text-primary">
          Computer Engineering @De Anza College
        </h1>
        <a
          href="mailto:inky@enk.icu"
          className="text-base font-thin text-desc "
        >
          inky@enk.icu
        </a>
        <Socials />
        <div className="px-5">
          {/* <p>
            IoT | Comp Engineering @FHDA | Contributer @OSHW Lab | FIRST Global
            2019 | Content creator @TTFRobotics YT channel and IG | Firmware Dev
            | Web2 Dev | 4x Hackathon Winner
          </p> */}
        </div>

        {/* <Projects /> */}
      </div>
    </div>
  );
}

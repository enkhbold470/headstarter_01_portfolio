export default function Hero() {
    return (
        <div className=" flex flex-col items-center my-10 text-[#2E2D29]">
            
            <img className="rounded-full" src="https://avatars.githubusercontent.com/u/53986637?v=4" alt="" />

             <div className="flex flex-col items-center gap-2 lg:w-1/3 md:1/2 w-[70%]">

            <h1 className="text-2xl font-bold text-[#8C1515] my-4">
                Enkhbold Ganbold
            </h1>
            <div className="px-5">
                <p>IoT | Comp Engineering @FHDA | Contributer @OSHW Lab | FIRST Global 2019 | Content creator @TTFRobotics YT channel and IG | Firmware Dev | Web2 Dev | 4x Hackathon Winner
            </p>
            </div>
    
            <div className="text-xl font-bold text-[#8C1515]">
                Projects
            </div>


<div >
            <div className="border-b">
                <a href="https://gaindot.enk.icu" > GainDOT</a>
                <p className="text-sm"> Fitness App for Gaining DOT crypto coin</p>
            </div>


            <div className="border-b">
                <a href="https://catchup-ai.com" > Catchup!</a>
                <p className="text-sm"> AI Research Paper aggregator</p>
            </div>

            <div className="border-b">
                <a href="https://hellofridge.vercel.app" > HelloFridge</a>
                <p className="text-sm"> AI Research Paper aggregator</p>
            </div>
            </div>

            </div>
        </div>
    );
}
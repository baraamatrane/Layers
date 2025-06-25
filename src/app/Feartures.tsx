import FeatureCard from "./FeatureCard";
import Tag from "./Tag";
import Image from "next/image";
import Avatar1 from "../../public/avatar-ashwin-santiago.jpg";
import Avatar2 from "../../public/avatar-owen-garcia.jpg";
import Avatar3 from "../../public/avatar-lula-meyers.jpg";
import Avatar4 from "../../public/avatar-florence-shaw.jpg";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];
const Features = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <Tag>FEATURES</Tag>
      <h2 className="text-4xl md:text-6xl text-center md:max-w-6xl w-full">
        Where power meets
        <br />
        <span className="text-lime-400 "> simplicity.</span>
      </h2>
      <div className="flex flex-col  lg:flex-row items-center justify-center gap-8">
        <FeatureCard
          title="Real-time Collaboration"
          description="Work together seamlessly with conflict-free team editing"
        >
          <div className="relative flex items-center justify-end">
            <Image
              src={Avatar1}
              alt="Ashwin Santiago"
              width={100}
              height={100}
              className="w-18 h-auto rounded-full border-4 bg-[#181818] p-1 border-blue-500 object-cover z-40"
            />
            <Image
              src={Avatar2}
              alt="Owen Garcia"
              width={100}
              height={100}
              className="-ml-4 w-18 h-auto rounded-full border-4 bg-[#181818] p-1 border-indigo-600 object-cover z-30"
            />
            <Image
              src={Avatar3}
              alt="Lula Meyers"
              width={100}
              height={100}
              className="-ml-4 w-18 h-auto rounded-full border-4 bg-[#181818] p-1 border-orange-400 object-cover z-20"
            />
            <Image
              src={Avatar4}
              alt="Florence Shaw"
              width={100}
              height={100}
              className="-ml-4 w-18 h-auto group-hover:opacity-100 opacity-0 relative transition-opacity duration-500 rounded-full border-4 bg-[#181818] p-1 border-green-600 object-cover z-10"
            />
            <div className="mr-2 w-15 absolute h-15 group-hover:hidden bg-stone-700 rounded-full flex items-center justify-center text-white text-lg z-10">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
          </div>
        </FeatureCard>
        <FeatureCard
          title="Interactive Prototyping"
          description="Engage your clients with prototypes that react to user actions"
        >
          <h2 className="text-4xl text-center font-semibold text-stone-600">
            We've achieved{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              incredible
            </span>
            <br /> growth this year
          </h2>
          <video
            src="/gif-incredible.mp4"
            width={160}
            height={60}
            autoPlay
            muted
            loop
            playsInline
            className="absolute -top-18 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"
          />
        </FeatureCard>{" "}
        <FeatureCard
          title="Keyboard Quick Actions"
          description="Powerful commands to help youcreate designs more quickly"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="group-hover:outline-2 group-hover:outline-offset-4 group-hover:outline-lime-400 group-hover:transition-transform outline-transparent outline- group-hover:translate-y-1 duration-200 rounded-2xl">
              <h3 className="text-black text-lg font-semibold text-center bg-[#d4d4d4] py-4 px-8 rounded-2xl">
                {" "}
                shift
              </h3>
            </div>
            <div className="group-hover:outline-2 group-hover:outline-offset-4 group-hover:outline-lime-400 group-hover:transition-transform outline- group-hover:translate-y-1 duration-500 rounded-2xl">
              <h3 className="text-black text-lg font-semibold text-center bg-[#d4d4d4] py-4 px-5 rounded-2xl">
                alt
              </h3>
            </div>
            <div className="group-hover:outline-2 group-hover:outline-offset-4 group-hover:outline-lime-400 group-hover:transition-transform outline- group-hover:translate-y-1 duration-1000 rounded-2xl">
              <h3 className="text-black text-lg font-semibold text-center bg-[#d4d4d4] py-4 px-5 rounded-2xl">
                C
              </h3>
            </div>
          </div>
        </FeatureCard>
      </div>
      <div className="flex flex-wrap gap-3 justify-center md:max-w-3xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-stone-900 border hover:scale-105 transition-transform cursor-pointer border-stone-600 rounded-full px-4 py-2 flex items-center gap-2"
          >
            <div className="text-black bg-lime-400 rounded-full w-5 h-5 flex items-center justify-center text-lg">
              &#10038;
            </div>
            <span className="text-white text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;

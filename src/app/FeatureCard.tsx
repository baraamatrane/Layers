import { ReactNode } from "react";

const FeatureCard = (props: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col relative group items-center justify-around w-full p-6 mt-12 max-w-88 h-92 pt-16 bg-[#181818] border-1 border-white/15 rounded-2xl gap-10">
      <div className="flex relative items-center justify-center h-28">
        {props.children}
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-white text-3xl font-medium max-w-54">
          {props.title}
        </h2>
        <p className="text-stone-500">{props.description}</p>
      </div>
    </div>
  );
};
export default FeatureCard;

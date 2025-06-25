import { ReactNode } from "react";

const IntegrationCard = (props: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-around w-full p-6 max-w-60 h-72 bg-[#181818] border-1 border-white/15 rounded-2xl gap-6">
      <div className="flex items-center justify-center h-22">
        {props.children}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-white md:text-3xl text-xl font-medium">
          {props.title}
        </h2>
        <p className="text-stone-400 md:text-lg text-sm text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default IntegrationCard;

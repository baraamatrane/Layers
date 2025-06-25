import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={twMerge(
        "capitalize text-[#A3E636] border border-[#A3E636] rounded-full py-2 px-3 w-fit text-center text-sm",
        className
      )}
      {...rest}
    >
      <span>&#10038;</span>
      <span> {children}</span>
    </div>
  );
};

export default Tag;

interface HeadingProps {
  center?: boolean;
  text?: string;
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
  return (
    <div
      className={`text-slate-500 px-3 md:px-10 md:text-xl my-5 md:my-10  ${
        center ? "text-center" : "text-left"
      }`}
    >
      {text}
    </div>
  );
};

export default Heading;

const ReuseTile = ({ text }: { text: string }) => {
  return (
    <div className="border block border-1 border-gray-300 rounded-xl  w-[30%] pl-10 py-8 pr-4 max-[890px]:py-4 max-[750px]:py-8 max-[750px]:w-[100%] cursor-pointer transition ease-linear delay-150  hover:bg-primary hover:text-light">
      <h1 className="font-medium text-xl">{text}</h1>
    </div>
  );
};

export default ReuseTile;

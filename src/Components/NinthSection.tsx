import { useState } from "react";
import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";
interface FormEvent extends React.FormEvent<HTMLFormElement> {}
const NinthSection = () => {
  const [clientEmail, setClientEmail] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClientEmail(clientEmail);
    console.log(clientEmail);
    setClientEmail("");
  };
  return (
    <div className="ninth-sec py-12">
      <div>
        <div
          className=" w-[80%] m-auto px-2 max-[800px]:w-full max-[800px]:text-center max-[800px]:flex-col
         max-[750px]:gap-2"
        >
          <div
            className="text-light  flex flex-row justify-between  text-[28px] font-bold max-[800px]:w-full max-[750px]:flex-col max-[800px]:text-[22px] 
          
          max-[800px]:gap-2
          
          "
          >
            <div>
              <h1>{Content.ninthSection.title1}</h1>
              <h1 className="min-w-[230px] max-[800px]:m-auto">
                {Content.ninthSection.title2}
              </h1>
            </div>
            <form
              className="flex gap-4  max-[800px]:flex-col text-center max-[800px]:gap-6 flex-wrap items-center justify-center"
              onSubmit={handleSubmit}
            >
              {/* <div className="h-[2px]  text-dark bg-light w-[75%] max-[750px]:hidden" /> */}
              <input
                type="email"
                className="bg-transparent border-b p-2  text-sm m-auto  border-light focus:outline-none placeholder:text-sm placeholder:text-light min-w-[300px]"
                placeholder="Enter your Email ..."
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex justify-center items-center"
              >
                <ReuseButton
                  mainClass="bg-accent py-0 h-[50px] uppercase rounded-3xl w-[250px] px-4
              max-[800px]:w-[220px]
                  
                  "
                  text={Content.ninthSection.btn}
                  textClass="font-bold text-sm pr-4"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinthSection;

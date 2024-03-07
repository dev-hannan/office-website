import { ChangeEvent } from "react";

interface UserData {
  name: string;
  email: string;
  phone: string;
}

interface InformationProps {
  userData: UserData;
  handleData: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Information: React.FC<InformationProps> = ({ userData, handleData }) => {
  return (
    <div className=" border p-5 rounded-3xl border-primary">
      <div className=" mb-6">
        <p className="text-2xl font-semibold">1. YOUR CONTACT INFORMATION</p>
      </div>
      <form>
        <div className="grid gap-6 mb-6 lg:grid-cols-3">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium 300"
            >
              Name*
            </label>
            <input
              value={userData.name}
              onChange={handleData}
              name="name"
              type="text"
              id="name"
              className=" border   text-sm rounded-lg block w-full p-2.5  focus:outline-none focus:ring-1 border-gray-300 focus:ring-primary focus:border-primary "
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium ">
              Email*
            </label>
            <input
              value={userData.email}
              onChange={handleData}
              name="email"
              type="email"
              id="email"
              className=" border   text-sm rounded-lg block w-full p-2.5  focus:outline-none focus:ring-1 border-gray-300 focus:ring-primary focus:border-primary "
              // className=" border   text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium ">
              Phone
            </label>
            <input
              value={userData.phone}
              onChange={handleData}
              type="tel"
              name="phone"
              id="phone"
              // className=" border   text-sm rounded-lg block w-full p-2.5"
              className=" border   text-sm rounded-lg block w-full p-2.5  focus:outline-none focus:ring-1 border-gray-300 focus:ring-primary focus:border-primary "
              placeholder="Enter phone number"
            />
          </div>
        </div>
        {/* <div className="flex justify-between text-sm font-medium text-red-500">
        <p>This field is required.</p>
        <p>This field is required.</p>
      </div> */}
      </form>
    </div>
  );
};

export default Information;

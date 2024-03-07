import { FaCaretRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ReuseButton = ({
  text,
  textClass = "",
  iconClass = "",
  mainClass = "",
}: {
  text: string;
  textClass?: string;
  iconClass?: string;
  mainClass?: string;
}) => {
  const allClass = "flex items-center cursor-pointer justify-center  w-[100%]";
  const additionClass = `${allClass} ${mainClass}`;
  const Iconbutton = () => {
    if (text.includes("visit")) {
      return <FaExternalLinkAlt className={iconClass} />;
    } else if (text.includes("Send message")) {
      return <IoIosSend className={iconClass} />;
    } else {
      return <FaCaretRight className={iconClass} />;
    }
  };
  return (
    <a className={additionClass}>
      <span className={textClass}>{text}</span>
      {Iconbutton()}
    </a>
  );
};

export default ReuseButton;

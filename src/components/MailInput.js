import { React, useState } from "react";

function MailInput() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="relative flex flex-col-reverse w-72">
      <input
        id={1}
        name={"mail"}
        value={"test"}
        onChange={""}
        placeholder={"test"}
        className={`peer w-full pb-1 pt-6 px-3 text-base rounded-lg border border-gray-400 focus:border-paxOrange text-black
         bg-white focus:outline-none focus:ring-0 appearance-none transition-colors duration-300 ${
           disabled ? "bg-gray-200" : ""
         }`}
        disabled={disabled}
      />
      <label
        htmlFor={"mail"}
        className="absolute top-0 items-center px-3 pt-2 text-xs peer-focus:font-semibold peer-focus:text-paxOrange uppercase text-gray-600 bg-transparent transition-colors duration-300"
      >
        Mail
      </label>
    </div>
  );
}

export default MailInput;

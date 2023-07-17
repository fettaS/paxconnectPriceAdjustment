"use client";
import { React, useState } from "react";

function Card({
  licenseVersion,
  userQuantity,
  oldPrice,
  newPrice,
  selectedValue,
  onRadioChange,
  isActive,
  onShow,
}) {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    onRadioChange(value);
    if (e.target.checked === true) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <section
      className="
            bg-white
            pt-20
            lg:pt-[15px]
            pb-12
            lg:pb-[15px]
            relative
            z-20
            overflow-hidden
            "
    >
      <div className="container">
        <div className="w-full px-4">
          <div
            className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
          >
            <span className="text-primary font-semibold text-lg block mb-4">
              {licenseVersion}
            </span>
            <h2 className="font-bold text-dark mb-5 text-[42px]">
              {newPrice}
              <span className="text-[30px] text-body-color font-medium line-through ml-4">
                {oldPrice}
              </span>
            </h2>
            <p
              className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
            >
              {userQuantity}
            </p>
            <form>
              <label
                htmlFor={licenseVersion}
                className={
                  isActive
                    ? "w-full block text-base font-semibold text-primary bg-paxOrange text-white border-[#D4DEFF] rounded-md text-center p-4"
                    : "w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF] rounded-md text-center p-4 hover:text-black hover:bg-white hover:border-paxOrange transition"
                }
              >
                <input
                  type="radio"
                  id={licenseVersion}
                  name="licenseVersions"
                  onChange={(handleChange, onShow)}
                  style={{ visibility: "hidden" }}
                  value={licenseVersion}
                  checked={selectedValue === licenseVersion}
                  label={licenseVersion}
                ></input>
                {licenseVersion} <br /> auswählen
              </label>
            </form>
            <div>
              <span className="absolute right-0 top-7 z-[-1]">
                <svg
                  width="77"
                  height="172"
                  viewBox="0 0 77 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="86"
                      y1="0"
                      x2="86"
                      y2="172"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#EC6228" stopOpacity="0.09" />
                      <stop offset="1" stopColor="#EC6228" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute right-4 top-4 z-[-1]">
                <svg
                  width="41"
                  height="89"
                  viewBox="0 0 41 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="38.9138"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 38.9138 87.4849)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 38.9138 74.9871)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 38.9138 62.4892)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 38.9138 38.3457)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 38.9138 13.634)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 38.9138 50.2754)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 38.9138 26.1319)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="38.9138"
                    cy="1.42021"
                    r="1.42021"
                    transform="rotate(180 38.9138 1.42021)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 26.4157 87.4849)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 26.4157 74.9871)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 26.4157 62.4892)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 26.4157 38.3457)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 26.4157 13.634)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 26.4157 50.2754)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 26.4157 26.1319)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="26.4157"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 26.4157 1.4202)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 13.9177 87.4849)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 13.9177 74.9871)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 13.9177 62.4892)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 13.9177 38.3457)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 13.9177 13.634)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 13.9177 50.2754)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 13.9177 26.1319)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="13.9177"
                    cy="1.42019"
                    r="1.42021"
                    transform="rotate(180 13.9177 1.42019)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="87.4849"
                    r="1.42021"
                    transform="rotate(180 1.41963 87.4849)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="74.9871"
                    r="1.42021"
                    transform="rotate(180 1.41963 74.9871)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="62.4892"
                    r="1.42021"
                    transform="rotate(180 1.41963 62.4892)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="38.3457"
                    r="1.42021"
                    transform="rotate(180 1.41963 38.3457)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="13.634"
                    r="1.42021"
                    transform="rotate(180 1.41963 13.634)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="50.2754"
                    r="1.42021"
                    transform="rotate(180 1.41963 50.2754)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="26.1319"
                    r="1.42021"
                    transform="rotate(180 1.41963 26.1319)"
                    fill="#EC6228"
                  />
                  <circle
                    cx="1.41963"
                    cy="1.4202"
                    r="1.42021"
                    transform="rotate(180 1.41963 1.4202)"
                    fill="#EC6228"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;

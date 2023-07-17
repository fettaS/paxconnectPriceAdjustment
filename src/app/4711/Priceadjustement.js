"use client";
import Card from "@/components/Card";
import MailInput from "@/components/MailInput";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function Priceadjustement() {
  const [selectedValue, setSelectedValue] = useState("");
  const [activeChild, setActiveChild] = useState(0);
  const [data, setData] = useState([]);
  const [mail, setMail] = useState("");
  const [buttonChooser, setButtonChooser] = useState("");

  const handleRadioChange = (value, activeChild) => {
    setSelectedValue(value);
  };

  const handleMailChange = (mailValue) => {
    setMail(mailValue);
  };

  const { push } = useRouter();

  useEffect(() => {
    const getData = async () => {
      const query = await axios.get(
        "https://test-central.smartberatung.com/v1/Filemaker/PriceAdjustment/Demo/1/UMWDYR"
      );
      const response = await query.data;
      setData(response.info);
    };

    getData();
  }, []);

  const btnOnClickConsent = () => {
    const res = axios.put(
      "https://test-central.smartberatung.com/v1/Filemaker/PriceAdjustment/Demo/1/UMWDYR/Answer",
      {
        agencyId: 1,

        adjustmentAccepted: true,

        licenseChangeRequested: false,

        newEmail: mail,
      }
    );
    push("/ThankYou");
  };

  const btnOnClickLicenseChange = () => {
    const res = axios.put(
      "https://test-central.smartberatung.com/v1/Filemaker/PriceAdjustment/Demo/1/UMWDYR/Answer",
      {
        agencyId: 1,

        adjustmentAccepted: false,

        licenseChangeRequested: true,

        newEmail: mail,
      }
    );
    push("/ThankYou");
  };

  const btnOnClickRefuseIncrease = () => {
    const res = axios.put(
      "https://test-central.smartberatung.com/v1/Filemaker/PriceAdjustment/Demo/1/UMWDYR/Answer",
      {
        agencyId: 1,

        adjustmentAccepted: false,

        licenseChangeRequested: false,

        newEmail: mail,
      }
    );
    push("/ThankYou");
  };

  return (
    <div className="mt-10">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="text-center mx-auto mb-[30px] lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Onlineformular zur Anpassung des monatlichen Lizenzpreises Ihrer
              paxlounge
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-1
                  "
            >
              {data.name}
            </h2>
            <p>{data.street}</p>
            <p className="mb-6">
              {data.zip} {data.city}
            </p>
            <p className="text-base text-body-color">
              aktuell genutze Lizenzversion {data.listOfLicenses}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:justify-center sm:flex-row w-full">
        <Card
          licenseVersion="paxlounge mobile"
          userQuantity="1 Nutzer"
          oldPrice="19€"
          newPrice="24€"
          selectedValue={selectedValue}
          onRadioChange={handleRadioChange}
          isActive={activeChild === 0}
          onShow={() => setActiveChild(0)}
        ></Card>
        <Card
          licenseVersion="paxlounge S"
          userQuantity="2 Nutzer"
          oldPrice="25€"
          newPrice="30€"
          selectedValue={selectedValue}
          onRadioChange={handleRadioChange}
          isActive={activeChild === 1}
          onShow={() => setActiveChild(1)}
        ></Card>
        <Card
          licenseVersion="paxlounge M"
          userQuantity="5 Nutzer"
          oldPrice="29€"
          newPrice="35€"
          selectedValue={selectedValue}
          onRadioChange={handleRadioChange}
          isActive={activeChild === 2}
          onShow={() => setActiveChild(2)}
        ></Card>
        <Card
          licenseVersion="paxlounge L"
          userQuantity="10 Nutzer"
          oldPrice="39€"
          newPrice="49€"
          selectedValue={selectedValue}
          onRadioChange={handleRadioChange}
          isActive={activeChild === 3}
          onShow={() => setActiveChild(3)}
        ></Card>
      </div>
      <div className="flex flex-col justify-center lg:justify-center sm:flex-row w-full items-center content-center mb-6">
        <MailInput onMailChange={handleMailChange} className="basis-1/4" />
      </div>
      <div className="flex flex-col justify-center lg:justify-center sm:flex-row w-full items-center content-center gap-8 ml-12 mr-12 mb-6">
        <button
          onClick={btnOnClickConsent}
          className="basis-1/4 py-2 px-4 flex justify-center items-center bg-success hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Zustimmung erteilen
        </button>
        <button
          onClick={btnOnClickLicenseChange}
          className="basis-1/4 py-2 px-4 flex justify-center items-center  bg-warning hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Zustimmung erteilen & Lizenzwechsel anfordern
        </button>
        <button
          onClick={btnOnClickRefuseIncrease}
          className="basis-1/4 py-2 px-4 flex justify-center items-center  bg-black hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Erhöhung ablehnen
        </button>
      </div>
    </div>
  );
}

export default Priceadjustement;

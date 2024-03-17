
"use client";
import AddPatient from "@/components/AddPatient";
import React, { useEffect } from "react";
import { useState } from "react";
const AddPatientPage = () => {
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API endpoint
        const response = await fetch("/api/patients", {
          next: { tags: ["patientData"], cache: "no-store", revalidate: 2 },
        });
        const data = await response.json();

        // Update state with the received data
        setPatientData(data.patientData);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Perform search action with the search term
    const filteredData = patientData.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    return filteredData;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="bg-[#F8F8F8] w-full px-[20px] py-3 min-h-screen">
      <div className="mt-[20px]">
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for a patient"
          className="w-full px-[20px] py-[15px] bg-[#F4F4F4]"
        />{" "}
        <div className="grid lg:grid-cols-4 grid-cols-1 mt-[20px]">
          {/* Map data with the search term  */}
          {handleSearch().map((item) => (
            <div
              key={item.id}
              className="w-[289px] px-5 bg-white mb-[20px] border border-[#E5E8EA]  py-6"
            >
              <div className="text-[#091A2B]">{item.name}</div>
              <div className="text-[#A0ABBB] flex text-[12px]">
                {" "}
                <div className="mr-[10px]">{item.sex}</div>{" "}
                <li>{item.age} years</li>
              </div>
              <div className="flex justify-between text-[14px] mt-5 mb-[18px]">
                <span className="text-[#686D79]">Weight:</span>{" "}
                <span className="text-[#73B873]">{item.weight}kg</span>{" "}
              </div>
              <div className="flex justify-between text-[14px] mb-[18px]">
                <span className="text-[#686D79]">Blood Pressure</span>{" "}
                <span className="text-[#73B873]">{item.bloodPressure}mmHd</span>{" "}
              </div>
              <div className="flex justify-between mb-[18px] text-[14px] ">
                <span className="text-[#686D79]">Condition</span>{" "}
                <span className="text-[#73B873]">{item.condition}</span>{" "}
              </div>
              <div className="bg-[#D9D9D9] w-full h-[1px] my-[25px]" />
              <div className="text-[#A0ABBB] text-[14px] font-medium">
                Medication
              </div>

              <div className="flex justify-between text-[14px] mt-2">
                <span className="text-[#686D79]">{item.medication}</span>{" "}
                <span className="text-[#73B873]">
                  {item.morningDosage}-{item.afternoonDosage}-
                  {item.eveningDosage}
                </span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddPatientPage;

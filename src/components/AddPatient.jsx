"use client";
import React from "react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "./ui/dialog";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import { addPatient } from "@/app/action";
export function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-[#0AAC49] px-[40px] py-[18px]  text-white"
      disabled={pending}
    >
      {pending ? "Adding" : "Add Patient"}
    </button>
  );
}
const AddPatient = () => {
  const [open, setOpen] = useState(false);

  const [state, formAction] = useFormState(addPatient, true);
  useEffect(() => {
    setOpen(false);
  }, [state]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-[#0AAC49] text-white text-[12px] font-semibold rounded w-[171px] py-[15px]">
        {" "}
        + Add Patient
      </DialogTrigger>
      <DialogContent className="max-w-[1200px] px-[45px] py-[32px] max-h-[80%] overflow-y-auto">
        <div className="text-[#091A2B] text-[24px] font-semibold mb-[70px]">
          Add Patient Data
        </div>

        <form action={formAction}>
          <div className="flex mb-[70px]">
            <div className="w-[497px] py-[55px]">
              <h2>Patient Name</h2>
              <input
                type="text"
                placeholder="e.g, Amos Edos-Osamudiamen"
                name="name"
                required
                className="w-full py-[14px] pl-[16px] pr-[25px]"
              />
              <div className="flex gap-[40px] mt-5">
                <div className="w-[229px] mb-5">
                  <h2>Sex</h2>
                  <select
                    name="sex"
                    required
                    id=""
                    className="w-full px-4 py-3"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="w-[229px]">
                  <h2>Age</h2>
                  <input
                    type="text"
                    name="age"
                    required
                    placeholder="000"
                    className="w-full  px-4 py-3"
                  />
                </div>
              </div>
              <div className="flex gap-[40px] mt-5">
                <div className="w-[229px] mb-5">
                  <h2>Weight (in kg)</h2>
                  <input
                    type="text"
                    required
                    name="weight"
                    placeholder="00.00"
                    className="w-full  px-4 py-3"
                  />
                </div>
                <div className="w-[229px]">
                  <h2>Blood Pressure (mmHd)</h2>
                  <input
                    type="text"
                    required
                    name="bloodPressure"
                    placeholder="00/00"
                    className="w-full  px-4 py-3"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="bg-[#D9D9D9] mx-[59px] w-[1px] h-[377px]"></div>
            <div className="w-[497px] py-[55px]">
              <h2>Condition</h2>
              <input
                type="text"
                required
                placeholder="e.g, Demantia"
                name="condition"
                className="w-full py-[14px] pl-[16px] pr-[25px]"
              />
              <h2 className="mt-5">Medication</h2>

              <input
                type="text"
                name="medication"
                required
                placeholder="e.g, Ibuprofen"
                className="w-full  px-4 py-3"
              />
              <div className="flex gap-auto mt-5">
                <div className="w-[155px] mb-5">
                  <h2>Morning</h2>

                  <input
                    type="text"
                    required
                    name="morning"
                    placeholder="1"
                    className="w-full  px-4 py-3"
                  />
                </div>
                <div className="w-[155px] mb-5">
                  <h2>Afternoon</h2>

                  <input
                    type="text"
                    name="afternoon"
                    required
                    placeholder="1"
                    className="w-full  px-4 py-3"
                  />
                </div>
                <div className="w-[155px] mb-5">
                  <h2>Evening</h2>

                  <input
                    type="text"
                    required
                    name="evening"
                    placeholder="1"
                    className="w-full  px-4 py-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <Submit />
          <DialogClose asChild>
            <button className="bg-[#9095A94A] px-[40px] py-[18px] ml-[10px] text-[#697B94] ">
              Cancel
            </button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPatient;

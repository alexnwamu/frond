"use client";

import React from "react";
import { useTransition } from "react";
import { deleteUser } from "@/app/action";

const DeleteUserButton = ({ id }) => {
  let [isPending, startTransition] = useTransition();
  return (
    <button
      className="text-[#9E625F] bg-[#F8DEDD] rounded-[24px] cursor-pointer px-[13px] py-[8px]  hover:underline"
      onClick={() => startTransition(() => deleteUser(id))}
    >
      Delete
    </button>
  );
};

export default DeleteUserButton;

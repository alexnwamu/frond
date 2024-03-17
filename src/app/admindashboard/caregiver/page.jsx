import React from "react";
import prisma from "../../../../lib/db";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import DeleteUserButton from "@/components/DeleteUserButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/auth";
const page = async () => {
  const session = await getServerSession(authOptions);
  const users = await prisma.user.findMany();

  return (
    <div className="bg-[#F8F8F8] w-full px-[20px] py-3 min-h-screen">
      <Table className="w-full text-[#686D79] ">
        <TableHeader className="font-medium text-[#686D79] px-[45] py-[20px] bg-[#EFFCEF] border-none">
          <TableRow className='border-none'>
            <TableHead className=" ">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Profession</TableHead>
            <TableHead>Status</TableHead> <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="border-none">
          {users?.map((user, index) => (
            <TableRow key={user.id} className='border-none'>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.role === "ADMIN" ? "Admin" : "Caregiver"}
              </TableCell>
              <TableCell>Active</TableCell>
              <TableCell >
                <DeleteUserButton id={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;

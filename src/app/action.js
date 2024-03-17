"use server";
import prisma from "../../lib/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect, permanentRedirect } from "next/navigation";
export async function addPatient(prevState, formData) {
  const name = formData.get("name");
  const age = formData.get("age");
  const weight = formData.get("weight");
  const medication = formData.get("medication");
  const sex = formData.get("sex");
  const bloodPressure = formData.get("bloodPressure");
  const condition = formData.get("condition");
  const morningDosage = formData.get("morning");
  const afternoonDosage = formData.get("afternoon");
  const eveningDosage = formData.get("evening");
  console.log(
    name,
    age,
    weight,
    medication,
    sex,
    bloodPressure,
    condition,
    morningDosage,
    afternoonDosage,
    eveningDosage,
  );
  try {
    await prisma?.patient?.create({
      data: {
        name: name,
        age,
        weight,
        sex,
        bloodPressure,
        condition,
        medication,
        morningDosage,
        afternoonDosage,
        eveningDosage,
      },
    });
    revalidatePath("/admindashboard");
        redirect('/admindashboard')
    return !prevState;
  } catch (err) {
    console.log(err);
  }
}
export async function deleteUser(id) {
  console.log(id);
  try {
    await prisma?.user.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/dashboard/caregiver");
  } catch (error) {
    console.log(error);
  }
}

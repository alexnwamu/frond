import prisma from "../../../../lib/db";
export async function GET() {
  const patients = await prisma?.patient.findMany()
   const dataToSend = {
    patientData: patients,
  };

  return Response.json(dataToSend)
} 

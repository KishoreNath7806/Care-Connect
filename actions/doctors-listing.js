import { db } from "@/lib/prisma";

export async function getDoctorSpeciality(speciality){
    try{
        const doctors = await db.user.findMany({
            where:{role: "DOCTOR", speciality: speciality.split("%20").join(" "), verificationStatus: "VERIFIED"},
            orderBy:{name: "asc"}
        })
        return {doctors};
    }
    catch(error){
        console.error("getDoctorSpeciality: Error fetching doctors by speciality:", error);
        return{error: "Error fetching doctors by speciality"};
    }
}
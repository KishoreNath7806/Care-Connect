"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function verifyAdmin(){
    const {userId} = await auth();

    if(!userId){
        return false;
    }

    try{
        const user = await db.user.findUnique({
            where: {clerkUserId: userId},
        });
        return user?.role === "ADMIN";
    }catch(error){
        return false;
    }
}

export async function getPendingDoctors(){
    const isAdmin = await verifyAdmin();
    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    try{
        const pendingDoctors = await db.user.findMany({
            where: {role: "DOCTOR", verificationStatus: "PENDING"},
            order:{createdAt: "desc"}
        });
        return {doctors: pendingDoctors};
    }catch(error){
        throw new Error("Error fetching pending doctors");
    }
}

export async function getVerifiedDoctors(){
    const isAdmin = await verifyAdmin();
    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    try{
        const verifiedDoctors = await db.user.findMany({
            where: {role: "DOCTOR", verificationStatus: "VERIFIED"},
            order:{createdAt: "asc"}
        });
        return {doctors: verifiedDoctors};
    }catch(error){
        throw new Error("Error fetching verified doctors");
    }
}

export async function updateDoctorStatus(){
    const isAdmin = await verifyAdmin();
    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    const doctorId = formData.get("doctorId");
    const status = formData.get("status");

    if(!doctorId || !status || !["VERIFIED","REJECTED"].includes(status)){
        throw new Error("Invalid input data");
    }

    try{
        await db.user.update({
            where:{id:doctorId},
            data:{verificationStatus: status}
        });
        revalidatePath("/admin");
        return {success:true};
    }
    catch(error){
        console.error("Failed updating doctor status:", error);
        throw new Error(`Failed to update doctor status: ${error.message}`);
    }
}

export async function updateDoctorActiveStatus(){
    const isAdmin = await verifyAdmin();
    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    const doctorId = formData.get("doctorId");
    const suspend = formData.get("suspend") === "true";

    if(!doctorId){
        throw new Error("Doctor ID is required");
    }

    try{
        const status = suspend ? "PENDING" : "VERIFIED";

        await db.user.update({
            where:{id:doctorId},
            data:{verificationStatus: status},
        });
        revalidatePath("/admin");
        return {success:true};
    }
    catch(error){
        throw new Error(`Failed to update doctor active status: ${error.message}`);
    }
}
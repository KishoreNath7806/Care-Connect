"use server"

import { auth } from "@clerk/nextjs/server";

const PLAN_CREDITS = {
    free_user:2,
    standard:10,
    premium:24,
}

const APPOINTMENT_CREDIT_COST = 2;

export async function checkAndAllocateCredits(user){
    try{
        if(!user){
            return null;
        }

        if(user.role !=="PATIENT"){
            return user;
        }

        const {has} = await auth();

        const hasBasic = has({plan:"free_user"});
        const hasStandard = has({plan:"standard"});
        const hasPremium = has({plan:"premium"});

        let currentPlan = null;
        let creditsToAllocate = 0;
    }
    catch(error){

    }

}
"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader, Stethoscope, User } from 'lucide-react';
import useFetch from '@/hooks/use-fetch';
import { useRouter } from 'next/navigation';
import { setUserRole } from '@/actions/onboarding';

const doctorFormSchema = z.object({
  specialty:z.string().min(1, "Specialty is required"),
  experience: z.number().min(1, "Experience must be at least 1 year").max(70, "Experience must be less than 70 years"),
  credentialUrl: z.string().url("Please enter the valid URL").min(1,"Credential URL is required"),
  description:z.string().min(20,"Description must be atleast 20 characters").max(1000,"Description must be less than 1000 characters")
})

const OnboardingPage = () => {
  const [step, setStep] = useState("choose-role");
  const router = useRouter();

  const {data, fn:submitUserRole, loading} = useFetch(setUserRole);

  const {register, handleSubmit,formState:{errors},setValue,watch} = useForm({
    resolver: zodResolver(doctorFormSchema),
    defaultValues:{
      specialty:"",
      experience: undefined,
      credentialUrl: "",
      description: ""
    }
  })
  const specialtyValue = watch("specialty");

  const handlePatientSelection = async () => {
    if(loading){
      return;
    }
    const formData = new FormData();
    formData.append("role", "PATIENT");

    await submitUserRole(formData);
  }

  useEffect(() => {
    if(data && data?.success){
      toast.success("Role Selected");
      router.push(data.redirect)
    }
  }, [data]);

  if(step === "choose-role"){
    return(
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card onClick={()=> !loading && handlePatientSelection()} className="border-[#B6D0E2] hover:border-[#0047AB] cursor-pointer transition-all shadow-md">
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className='p-4 bg-[#B6D0E2] rounded-full mb-4'>
              <User className='h-8 w-8 text-[#4169E1]'/>
            </div>
            <CardTitle className="text-xl font-semibold mb-2">
              Join as a Patient
            </CardTitle>
            <CardDescription className="mb-4">
              Book appointments, Consult with doctors, and manage your healthcare journey
            </CardDescription>
            <Button className="w-full mt-2 bg-[#B6D0E2] text-black hover:bg-[#0047AB] hover:text-white" disable={loading}>
              {loading? (<><Loader className='mr-2 h-4 w-4 animate-spin'/>Processing...</>):<>Continue as a Patient</>}
            </Button>
          </CardContent>
        </Card>

        <Card onClick={()=> !loading && setStep("doctor-form")} className="border-[#B6D0E2] hover:border-[#0047AB] cursor-pointer transition-all shadow-md">
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className='p-4 bg-[#B6D0E2] rounded-full mb-4'>
              <Stethoscope className='h-8 w-8 text-[#4169E1]'/>
            </div>
            <CardTitle className="text-xl font-semibold mb-2">
              Join as a Doctor
            </CardTitle>
            <CardDescription className="mb-4">
              Create your professional profile, set your availability, and provide consultations
            </CardDescription>
            <Button className="w-full mt-2 bg-[#B6D0E2] text-black hover:bg-[#0047AB] hover:text-white" disable={loading}>
              Continue as a Doctor
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
  if(step ==="doctor-form"){
    return(
      <Card className="border-[#B6D0E2]">
        <CardContent className="pt-6">
          <div className="mb-6">
            <CardTitle className="text-2xl font-bold mb-2">
              Complete Your Doctor Profile
            </CardTitle>
            <CardDescription>
              Please provide your professional details for verification
            </CardDescription>
          </div>

          <form>

          </form>
        </CardContent>
      </Card>
    )
  }


  return (
    <div>OnboardingPage</div>
  )
}

export default OnboardingPage;
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Stethoscope, User } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { useRouter } from "next/navigation";
import { setUserRole } from "@/actions/onboarding";
import { useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SPECIALTIES } from "@/lib/specialities";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const doctorFormSchema = z.object({
  speciality: z.string().min(1, "speciality is required"),
  experience: z
    .number()
    .min(1, "Experience must be at least 1 year")
    .max(70, "Experience must be less than 70 years"),
  credentialUrl: z.string().url().min(1, "Credential URL is required"),
  description: z
    .string()
    .min(20, "Description must be atleast 20 characters")
    .max(1000, "Description must be less than 1000 characters"),
});

const OnboardingPage = () => {
  const [step, setStep] = useState("choose-role");
  const router = useRouter();



  const { data, fn: submitUserRole, loading } = useFetch(setUserRole);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(doctorFormSchema),
    defaultValues: {
      speciality: "",
      experience: undefined,
      credentialUrl: "",
      description: "",
    },
  });
  const specialityValue = watch("speciality");

  const handlePatientSelection = async () => {
    if (loading) {
      return;
    }
    const formData = new FormData();
    formData.append("role", "PATIENT");

    await submitUserRole(formData);
  };

  useEffect(() => {
    if (data && data?.success) {
      toast.success("Role Selected");
      router.push(data.redirect);
    }
  }, [data]);


  const searchParams = useSearchParams();
  const editMode = searchParams?.get("edit") === "1";

  useEffect(() => {
    if (!editMode) return;

    // Jump to doctor form immediately
    setStep("doctor-form");

    // Prefill from API
    (async () => {
      try {
        const res = await fetch("/api/me", { cache: "no-store" });
        if (!res.ok) return;
        const me = await res.json();

        if (me?.speciality) setValue("speciality", me.speciality);
        if (typeof me?.experience === "number") setValue("experience", me.experience);
        if (me?.credentialUrl) setValue("credentialUrl", me.credentialUrl);
        if (me?.description) setValue("description", me.description);
      } catch {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode]);

  const onDoctorSubmit = async (data) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("role", "DOCTOR");
    formData.append("speciality", data.speciality);
    formData.append("experience", data.experience);
    formData.append("credentialUrl", data.credentialUrl);
    formData.append("description", data.description);

    await submitUserRole(formData);
  };

  if (step === "choose-role") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          onClick={() => !loading && handlePatientSelection()}
          className="border-[#B6D0E2] hover:border-[#0047AB] cursor-pointer transition-all shadow-md"
        >
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className="p-4 bg-[#B6D0E2] rounded-full mb-4">
              <User className="h-8 w-8 text-[#4169E1]" />
            </div>
            <CardTitle className="text-xl font-semibold mb-2">
              Join as a Patient
            </CardTitle>
            <CardDescription className="mb-4">
              Book appointments, Consult with doctors, and manage your
              healthcare journey
            </CardDescription>
            <Button
              type="button"
              onClick={() => !loading && handlePatientSelection()}
              className="w-full mt-2 bg-[#B6D0E2] text-black hover:bg-[#0047AB] hover:text-white"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Continue as a Patient</>
              )}
            </Button>
          </CardContent>
        </Card>

        <Card
          onClick={() => !loading && setStep("doctor-form")}
          className="border-[#B6D0E2] hover:border-[#0047AB] cursor-pointer transition-all shadow-md"
        >
          <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
            <div className="p-4 bg-[#B6D0E2] rounded-full mb-4">
              <Stethoscope className="h-8 w-8 text-[#4169E1]" />
            </div>
            <CardTitle className="text-xl font-semibold mb-2">
              Join as a Doctor
            </CardTitle>
            <CardDescription className="mb-4">
              Create your professional profile, set your availability, and
              provide consultations
            </CardDescription>
            <Button
              type="button"
              onClick={() => !loading && setStep("doctor-form")}
              className="w-full mt-2 bg-[#B6D0E2] text-black hover:bg-[#0047AB] hover:text-white"
              disabled={loading}
            >
              Continue as a Doctor
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  if (step === "doctor-form") {
    return (
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

          <form className="space-y-6" onSubmit={handleSubmit(onDoctorSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="speciality">Medical speciality</Label>

              {/* make select full width and styled like the input */}
              <Select
                value={specialityValue}
                onValueChange={(value) => setValue("speciality", value)}
              >
                <SelectTrigger
                  id="speciality"
                  className="w-full border border-[#B6D0E2] rounded-md h-10 px-3"
                >
                  <SelectValue placeholder="Select your speciality" />
                </SelectTrigger>

                <SelectContent className="w-full">
                  <SelectGroup>
                    <SelectLabel>Specialties</SelectLabel>
                    {SPECIALTIES.map((spec) => (
                      <SelectItem value={spec.name} key={spec.name}>
                        <div className="flex items-center gap-2">
                          <span className="text-[#B6D0E2]">{spec.icon}</span>
                          {spec.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {errors.speciality && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.speciality.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                placeholder="eg. 10"
                {...register("experience", { valueAsNumber: true })}
                className="border border-[#B6D0E2] w-full"
              />
              {errors.experience && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="credentialUrl">
                Link to Credential Documents
              </Label>
              <Input
                id="credentialUrl"
                type="url"
                placeholder="http://example.com"
                {...register("credentialUrl")}
                className="border border-[#B6D0E2] w-full"
              />
              {errors.credentialUrl && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.credentialUrl.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                type="number"
                placeholder="Describe your expertise, services and approach to patient care..."
                rows="4"
                {...register("description")}
                className="border border-[#B6D0E2] w-full"
              />
              {errors.description && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setStep("choose-role");
                }}
                className="border-[#B6D0E2]"
                disabled={loading}
              >
                Back
              </Button>

              <Button
                type="submit"
                className="mt-2 bg-[#B6D0E2] text-black hover:bg-[#0047AB] hover:text-white"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>Submit for Verification</>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return <div>OnboardingPage</div>;
};

export default OnboardingPage;

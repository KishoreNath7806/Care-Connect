"use client";

import { updateDoctorActiveStatus } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useFetch from "@/hooks/use-fetch";
import {Ban, Loader2, Search, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { set } from "date-fns";
import { toast } from "sonner";


const VerifiedDoctors = ({doctors}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [targetDoctor, setTargetDoctor] = useState(null);

  const {
    loading, data, fn:submitStatusUpdate
  } = useFetch(updateDoctorActiveStatus);

  const filteredDoctors = doctors.filter((doctor)=> {
    const query = searchTerm.toLowerCase();
    return(
      doctor.name.toLowerCase().includes(query) ||
      doctor.email.toLowerCase().includes(query) ||
      doctor.speciality.toLowerCase().includes(query)
    );
  });

   const handleStatusChange = async (doctor) => {
    const confirmed = window.confirm(`Are you sure you want to ${doctor.name}`);
    if(!confirmed || loading) return;

    const formData = new FormData();
    formData.append("doctorId", doctor.id);
    formData.append("suspend", "true");
    setTargetDoctor(doctor);
    await submitStatusUpdate(formData);
  }

  useEffect(() => {
    if(data?.success && targetDoctor){
      toast.success(`Doctor ${targetDoctor.name} has been suspended.`);
      setTargetDoctor(null);
    }
  }, [data]);

  return (
    <div>
      <Card className="bg-muted/20 border-blue-900/20">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle className="text-xl font-bold text-blue-500">Manage Doctors</CardTitle>
              <CardDescription className="text-gray-600 font-semibold">View and Manage all verified doctors</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute h-4 w-4 left-2.5 top-2.5 text-blue-800"/>
              <Input placeholder="Search doctors by name, email..." className="pl-8 bg-background border-blue-900/50" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchTerm ? "No doctors found matching your search." : "No verified doctors available at this time."}
            </div>
          ):(
            <div className="space-y-4">
              {filteredDoctors.map((doctor) => (
                <Card
                  key={doctor.id}
                  className="bg-background border-blue-900/20 hover:border-blue-700/30 transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted/20 rounded-full p-2">
                          <User className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-blue-400">
                            {doctor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {doctor.speciality} &nbsp; &nbsp;{doctor.experience}{" "}
                            years experience
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end md:self-auto">
                        <Badge
                          variant="outline"
                          className="bg-emerald-900/20 border-emerald-900/30 text-emerald-900"
                          size="lg"
                        >
                          Active
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-900/30 bg-red-200 hover:bg-red-900/60 text-red-400"
                          onClick={() => handleStatusChange(doctor)}
                        >
                          {
                            loading && targetDoctor === doctor.id ? (<Loader2 className="animate-spin h-4 w-4 mr-1"/>): (<Ban className="h-4 w-4 mr-1"/>)
                          }
                          Suspend
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifiedDoctors;

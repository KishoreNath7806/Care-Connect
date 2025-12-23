"use client";

import { updateDoctorStatus } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useFetch from "@/hooks/use-fetch";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import React, { useState } from "react";
import { format } from "date-fns";

const PendingDoctors = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const {
    loading,
    data,
    fn: submitStatusUpdate,
  } = useFetch(updateDoctorStatus);

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseDialog = () => {
    setSelectedDoctor(null);
  }

  return (
    <div>
      <Card className="bg-muted/20 border-blue-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-400">
            Pending Doctor Verification
          </CardTitle>
          <CardDescription>
            Review and approve doctor applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          {doctors.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No pending doctors to verify at this time
            </div>
          ) : (
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card
                  key={doctor.id}
                  className="bg-background border-blue-900/20 hover:border-blue-700/30 transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
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
                          className="bg-amber-900/20 border-amber-900/30 text-amber-900"
                          size="lg"
                        >
                          Pending
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-900/30 hover:bg-muted/80"
                          onClick={() => handleViewDetails(doctor)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      {selectedDoctor && (
        <Dialog open={!!selectedDoctor} onOpenChange= {handleCloseDialog}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Doctor Verification Details</DialogTitle>
              <DialogDescription>
                Be careful while reviewing doctor&apos;s informations to make decisions
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 space-x-10 py-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-1 flex-1">
                  <h4 className='text-sm font-medium text-muted-foreground'>Full Name</h4>
                  <p className="text-base font-medium text-blue-500">{selectedDoctor.name}</p>
                </div>
                <div className='space-y-1 flex-1'>
                  <h4 className='text-sm font-medium text-muted-foreground'>E-mail</h4>
                  <p className="text-base font-medium text-blue-500">{selectedDoctor.email}</p>
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className='text-sm font-medium text-muted-foreground'>Application Date</h4>
                  <p className="text-base font-medium text-blue-500">{format(new Date(selectedDoctor.createdAt),'ppp')}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PendingDoctors;

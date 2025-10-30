import { getCurrentUser } from "@/actions/onboarding";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ClipboardCheck, XCircle } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const VerificationPage = async () => {
  const user = await getCurrentUser();

  if (user?.verificationStatus === "VERIFIED") {
    redirect("/doctor");
  }

  const isRejected = user?.verificationStatus === "REJECTED";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card className="border border-[rgba(62,161,255,0.04)]">
          <CardHeader className="text-center">
            <div className={`mx-auto p-4 ${isRejected?"bg-red-900/20":"bg-amber-900/20"} rounded-full mb-4 w-fit`}>
              {isRejected?(<XCircle className="h-8 w-8 text-red-400"/>):(<ClipboardCheck className="h-8 w-8 text-amber-400"/>)}
            </div>
            <CardTitle className="text-2xl font-bold text-gray-500">
              {isRejected ? "Verification Rejected" : "Verification in Progress"}
            </CardTitle>
            <CardDescription className="text-lg">
              {isRejected ? "Unfortunately, your verification has been rejected. Please review the feedback provided and resubmit your documents for verification." : "Your verification is currently being reviewed. We appreciate your patience and will notify you once the process is complete."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isRejected? (<div className="bg-red-900/10 border border-red-900/20 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0"/>
              <div className="text-muted-foreground text-left">
                <p className="mb-2">
                  After reviewing your application, our administrative team determined that it does not currently fulfill our eligibility criteria. Some typical reasons for rejection include:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Incomplete or unclear credential documents</li>
                  <li>Not meeting the required level of professional experience</li>
                  <li>Service description lacking sufficient detail or clarity</li>
                </ul>
                <p>
                  You’re welcome to revise your application with additional details and submit it again for consideration.
                </p>
              </div>
            </div>) : (<div className="bg-amber-900/10 border border-amber-900/20 rounded-lg p-4 mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-amber-400 mr-3 inline-block flex-shrink-0"/>
              <p className="text-muted-foreground text-left">
                Your profile is being reviewed by our administrative team. This verification process usually takes around 1–2 business days. You’ll be notified via email once your account has been successfully verified.
              </p>
            </div>)}

            <p className="text-gray-400">{isRejected?"You may revise your doctor profile and submit it again for approval.":"In the meantime, feel free to explore our platform or contact our support team if you need any assistance."}</p>
          
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="bg-amber-900/50 text-white hover:bg-amber-900/70 hover:text-white">
                <Link href="/">Return to Home</Link>
              </Button>
            </div> */}

            {isRejected? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
                <Button asChild className="bg-red-600 text-white hover:bg-red-700">
                  <Link href="/onboarding?edit=1">Review & Resubmit</Link>
                </Button>
              </div>
            ): (<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="bg-amber-900/50 text-white hover:bg-amber-900/70 hover:text-white">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerificationPage;

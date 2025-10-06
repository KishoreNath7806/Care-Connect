import { Stethoscope } from "lucide-react";
import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";


const ConsultationPackages = () => {
    return(
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Consultation Packages</h2>
                    <p className="text-center font-semibold text-gray-500 mb-[30px]">Choose the perfect consultation package that fits your healthcare needs</p>
                </div>

                <div>
                    {/* Pricing Table */}
                    <Card className="mt-12 bg-muted/20 border-[rgba(62,161,255,0.04)]-900/30">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl font-semibold text-gray-500"><Stethoscope className="h-5 w-5 mr-2 text-[#1560bd]"/>How Our Credit System Works</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                            <CardAction>Card Action</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ConsultationPackages;
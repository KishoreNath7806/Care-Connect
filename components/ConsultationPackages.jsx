import { Check, Stethoscope } from "lucide-react";
import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { creditBenefits } from "@/lib/data";
import Pricing from "./pricing";


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
                    <Pricing />
                    <Card className="mt-12 bg-muted/20 border-[rgba(62,161,255,0.04)]-900/30">
                        <CardHeader>
                            <CardTitle className="flex items-center text-xl font-semibold text-gray-500"><Stethoscope className="h-5 w-5 mr-2 text-[#1560bd]"/>How Our Credit System Works</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {creditBenefits.map((benefit, index) => {
                                return(
                                    <li key={index} className="flex items-start">
                                        <div className="mr-3 mt-1 bg-blue-900/20 p-1 rounded-full flex">
                                            <Check className="h-4 w-4 text-[#1560bd]"/>
                                        </div>
                                        <p className="text-muted-foreground"
                                            dangerouslySetInnerHTML={{__html:benefit}}/>
                                    </li>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ConsultationPackages;
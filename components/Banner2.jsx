import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Banner2 = () => {
    return(
        <section className="py-20">
            <div className="container mx-auto px-4">
                <Card className="bg-gradient-to-r from-[#b2d4f0] to-[#ccdbfd] border-[#BBDCE5]">
                    <CardContent className="pt-8 md:p-12 lg:p-16 relative overflow-hidden">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-6">Ready to take control of your healthcare?</h2>
                            <p className="text-lg text-gray-500 mb-6">Join Care-Connect today and take control of your health with ease! Book appointments, consult doctors online, and get medical advice anytime, anywhere — all in one simple app.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-[#1560bd] text-white cursor-pointer hover:bg-[#0047AB]" asChild>
                                <Link href="/sign-up">Sign Up Now</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-[#1560bd] text-[#1560bd] hover:bg-[#0047AB] hover:text-white" asChild>
                                <Link href="/pricing">View Pricing</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </section>

    );
}

export default Banner2;
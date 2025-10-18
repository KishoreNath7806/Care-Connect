import Pricing from "@/components/pricing";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import SupportForm from "@/components/SupportForm";

const PricingPage = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex justify-start mb-2">
                <Link href='/' className="flex items-center text-gray-500 font-semibold hover:text-[#1560bd] transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2"/>
                    Back to Home
                </Link>
            </div>

            <div className="max-w-full mx-auto mb-12 text-center">
                <h1 className="tex-gray-500 text-4xl md:text-5xl font-bold gradient-title mb-4">Affordable Care, Made Simple</h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">Choose your ideal healthcare plan with complete transparency — no extra fees, no binding commitments.</p>
            </div>

            <Pricing />

            <div className="mt-16 max-full mx-auto">
                <SupportForm />
            </div>
        </div>
    )
}
export default PricingPage; 
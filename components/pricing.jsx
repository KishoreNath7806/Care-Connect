import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="border-[rgba(62,161,255,0.04)] shadow-lg bg-gradient-to-b from-[#b2d4f0] to-transparent">
        <CardContent className="p-6 md:p-8">
            <PricingTable checkoutProps={
                {
                    appearance:{
                        elements:{
                            drawerRoot:{
                                zIndex:200,
                            }
                        }
                    }
                }
            }/>
        </CardContent>
    </Card>
  );
};

export default Pricing;
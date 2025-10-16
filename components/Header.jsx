import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "./ui/button";
import { checkUser } from "@/lib/checkUser";
import { Badge, Calendar, CreditCard, Shield, Stethoscope, User } from "lucide-react";
import { checkAndAllocateCredits } from "@/actions/credits";

export default async function(){
    const user = await checkUser();
    await checkAndAllocateCredits(user);  
    return(
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-20 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo-single.png"
                    alt="Medimeet logo"
                    width={200}
                    height={60}
                    className="h-10 w-auto object-contain"/>
                    
                </Link>

                <div className="flex items-center space-x-2">
                    <SignedIn>
                        {user?.role ==="UNASSIGNED" && (
                            <Link href="/onboarding">
                                <Button variant="outline" className="hidden md:inline-flex items-center gap-2"><User className="h-4 w-4" />Complete Profile</Button>
                                <Button variant="ghost" className="md:hidden w-10 h-10 p-0"><User className="h-4 w-4" /></Button>
                            </Link>
                        )}

                        {user?.role ==="PATIENT" && (
                            <Link href="/appointments">
                                <Button variant="outline" className="hidden md:inline-flex items-center gap-2"><Calendar className="h-4 w-4" />My Appointments</Button>
                                <Button variant="ghost" className="md:hidden w-10 h-10 p-0"><Calendar className="h-4 w-4" /></Button>
                            </Link>
                        )}

                        {user?.role ==="DOCTOR" && (
                            <Link href="/doctor">
                                <Button variant="outline" className="hidden md:inline-flex items-center gap-2"><Stethoscope className="h-4 w-4" />Doctor Dashboard</Button>
                                <Button variant="ghost" className="md:hidden w-10 h-10 p-0"><Stethoscope className="h-4 w-4" /></Button>
                            </Link>
                        )}

                        {user?.role ==="ADMIN" && (
                            <Link href="/admin">
                                <Button variant="outline" className="hidden md:inline-flex items-center gap-2"><Shield className="h-4 w-4" />Admin Dashboard</Button>
                                <Button variant="ghost" className="md:hidden w-10 h-10 p-0"><Shield className="h-4 w-4" /></Button>
                            </Link>
                        )}
                    </SignedIn>

                    {(!user || user.role === "PATIENT") && (
                        <Link href="/pricing">
                            <Badge variant="outline" className="h-9 bg-white border-[rgba(62,161,255,0.04)] px-3 py-1 flex items-center gap-2">
                                <CreditCard className="h-3.5 w-3.5  text-[rgba(62,161,255,0.7)]" />
                                <span className="text-[rgba(62,161,255,0.7)]">
                                    {user && user?.role ==="PATIENT"?(
                                        <>
                                            {user.credits}{" "}
                                            <span className="hidden md:inline">Credits</span>
                                        </>
                                    ):(
                                        <>Pricing</>
                                    )}
                                </span>
                            </Badge>
                        </Link>
                    )}

                    <SignedOut>
                        <SignInButton>
                            <Button className="bg-[#6082B6] text-[#fff] hover:bg-[#4682B4]">Sign In</Button>
                        </SignInButton>
                    </SignedOut>

                    <SignedIn>
                    <UserButton />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

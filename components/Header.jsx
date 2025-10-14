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

export default async function(){
    await checkUser();  
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

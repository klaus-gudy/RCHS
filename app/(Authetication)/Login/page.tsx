"use client"
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RegisterForm } from "@/app/components/register-form";
import { buttonVariants } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="h-[1000px]">
      <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/Register"
          className={cn(
            buttonVariants({ variant: "default" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Register
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-[#0474ed]" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Image
              alt="RCHS System"
              src="/logo-white.png"
              className="w-12 mx-3.5 min-h-fit"
              width={25}
              height={25}                           
            ></Image>
            RCHS System
          </div>
          <div className="relative z-20 mt-auto"></div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

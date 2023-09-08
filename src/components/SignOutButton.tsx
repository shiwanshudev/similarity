"use client";

import { FC, useState } from "react";
import Button from "@ui/Button";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      //   toast({
      //     title: "Error sign out",
      //     message: "Please try again later",
      //     type: "error",
      //   });
    }
  };
  return (
    <Button isLoading={isLoading} onClick={signOutWithGoogle}>
      Sign In
    </Button>
  );
};

export default SignOutButton;
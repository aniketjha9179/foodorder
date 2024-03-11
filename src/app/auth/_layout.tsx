import { useAuth } from "@/src/provider/AuthProvider";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  // AFTER signIn redirecting the user to next screen
  // protected auth layout
  const { session } = useAuth();
  // if session is true than redirect
  if (session) {
    return <Redirect href={"/"} />;
  }
  return <Stack />;
}

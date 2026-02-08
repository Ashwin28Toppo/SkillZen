import React from 'react'
import { getUserOnboardingStatus } from '@/actions/user'
import { industries } from '@/data/industries'
import OnboardingForm from "./.components/onboarding-form";

import { redirect } from "next/navigation";


const OnboardingPage = async () => {
  //Check if the user is already onboarded or not
  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded){
    redirect("/dashboard");
}
  return (
   <main>
    <OnboardingForm industries={industries}/>
   </main>
  )
}

export default OnboardingPage;

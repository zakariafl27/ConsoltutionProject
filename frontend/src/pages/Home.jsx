import React from 'react';
import Section from '../layouts/Section';
import PatientsCount from '../components/PatientsCount';
import CardAbout from '../components/CardAbout';
import HowItWork from '../components/HowItWork';
import DoctorsCard from '../components/DoctorsCard';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div className="flex flex-col items-center  lg:space-y-0 px-4 lg:px-0">
      <div className="w-full">
        <Section />
      </div>
      <div className="w-full">
        <PatientsCount />
      </div>
      <div className="w-full max-w-screen-lg">
        <CardAbout />
      </div>
      <HowItWork />
      
      <DoctorsCard />

      <Subscribe />
    </div>
  );
}

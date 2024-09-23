"use client";

import React from 'react';
import { TitleSection } from '../titleSection/page';
import Button from '../button/page';

export default function GoogleMaps() {
  return (
    <section className="" id="contact">
      <TitleSection
        title="Contact Lara Amada: Location, Hours, and Booking"
        subtitle="Visit me at my studio, where art meets precision. Find our address and business hours below. Ready to book your tattoo session with Lara Amada? Click 'Book Now' to get started"
      />
      <div className="mx-auto mt-4 sm:mt-18 max-w-7xl px-4">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-4">
          <div className="w-full h-full border rounded-lg overflow-hidden lg:w-1/2">
            <img src="./goole.png" alt="" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 bg-team-pattern bg-team-size mask-team-mask">
            <h2 className="text-2xl text-gray-100 font-bold mt-6 mb-2">LaMigra Ink</h2>
            <p className="mb-4 text-gray-400">I'm honored to be a member of the La Migra Ink team and to provide services to my clients at Swindon's premier tattoo studio</p>
            <h2 className="text-2xl text-gray-100 font-bold mb-2">Location Address</h2>
            <p className="mb-4 text-gray-400">199 Rodbourne Rd, Swindon SN2 2AA, UK</p>
            <h2 className="text-2xl text-gray-100 font-bold mb-2">Business Hours</h2>
            <p className="mb-4 text-gray-400">Monday to Saturday, 8:00 AM to 6:00 PM</p>
            <div className="mb-6 mt-4">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

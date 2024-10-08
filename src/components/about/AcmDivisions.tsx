import React from "react";

const AcmDivisions = () => {
  return (
    <div className="z-10 backdrop-blur-md bg-white/10 text-white py-12 px-4 my-8">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">Divisions</h2>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="flex items-center space-x-4 mx-auto">
          <img
            src="/assets/acm-logos/acm-create-logo.svg"
            alt="ACM Create"
            className="h-16"
          />
          <span className="text-white font-bold text-3xl">ACM Create.</span>
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <img
            src="/assets/acm-logos/acm-educate-logo.svg"
            alt="ACM Educate"
            className="h-16"
          />
          <span className="text-white font-bold text-3xl">ACM Educate.</span>
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <img
            src="/assets/acm-logos/acm-research-logo.svg"
            alt="ACM Research"
            className="h-16"
          />
          <span className="text-white font-bold text-3xl">ACM Research.</span>
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <img
            src="/assets/acm-logos/acm-hackuta-logo.svg"
            alt="ACM HackUTA"
            className="h-16"
          />
          <span className="text-white font-bold text-3xl">ACM HackUTA.</span>
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <img
            src="/assets/acm-logos/acm-marketing-logo.png"
            alt="ACM Marketing"
            className="h-16"
          />
          <span className="text-white font-bold text-3xl">ACM Marketing.</span>
        </div>
        <div className="flex items-center space-x-4 mx-auto">
          <img
            src="/assets/acm-logos/acm-outreach-logo.png"
            alt="ACM Outreach"
            className="h-16"
          />
          <span className="text-white font-bold text-3xl">ACM Outreach.</span>
        </div>
      </div>
    </div>
  );
};

export default AcmDivisions;

import React from 'react';

export function OurJourney() {
  const journeyItems = [
    { year: 2015, description: "Founded with a mission to empower small businesses" },
    { year: 2018, description: "Expanded to 10 districts across Telangana", position: "down" },
    { year: 2020, description: "Launched women empowerment schemes" },
    { year: 2025, description: "Serving over 40 groups and expanding our reach", position: "down" },
    { year: "Future", description: "Planning to expand across South India" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="px-6 md:px-12 bg-[#FFFFFF] font-sans py-32 mt-[-40px]">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl font-bold text-[#072515]" style={{ fontFamily: "Product Sans" }}>
              Our Journey
            </h1>
          </div>

          {/* Mobile Layout */}
<div className="md:hidden flex flex-col items-center mt-10 space-y-8 relative">
  {/* Vertical Line */}
  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>

  {journeyItems.map((item, index) => (
    <div key={index} className="flex items-start space-x-4 px-6 w-full relative">
      {/* Circle Indicator */}
      <div className="relative flex flex-col items-center">
        <div className="w-5 h-5 ml-[-20] bg-orange-500 rounded-full border-4 border-white"></div>
      </div>

      {/* Year and Description */}
      <div className="ml-4">
        <h3 className="text-lg font-bold text-[#072515]">{item.year}</h3>
        <p className="text-sm text-[#333] mt-1">{item.description}</p>
      </div>
    </div>
  ))}
</div>


          {/* Desktop Layout */}
          <div className="hidden md:block relative mt-4 pt-14 pb-16">
            <div
              className="journey-timeline absolute left-[1%] right-[9%] top-1/2 flex justify-between items-center"
              style={{ height: "1px", backgroundColor: "transparent" }}
            >
              {journeyItems.map((item, index) => (
                <div key={index} className="relative text-center" style={{ flex: "0 0 20%" }}>
                  <div
                    className="absolute transition-all duration-300 hover:-translate-y-1"
                    style={{
                      top: item.position === "down" ? "80px" : "-80px",
                      left: '50%',
                      transform: 'translateX(-50%)',
                      textAlign: 'center',
                    }}
                  >
                    <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#072515]">
                      {item.year}
                    </h3>
                    <p className="text-sm md:text-base text-[#333] break-words w-[180px]">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="absolute left-1/2 top-[calc(50%+40px)] transform -translate-x-1/2 -translate-y-6/2 
                                      w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full border-4 border-white 
                                      transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
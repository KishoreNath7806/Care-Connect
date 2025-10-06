'use client'

import { motion } from "framer-motion";
console.log("Motion:", motion);

const hospitals = [
  { name: "AIIMS", image: "/Hospitals/AIIMS.png" },
  { name: "Apollo", image: "/Hospitals/APOLLO.png" },
  { name: "Medanta Hospital", image: "/Hospitals/MEDANTA.png" },
  { name: "Fortis Healthcare", image: "/Hospitals/FORTIS.png" },
  { name: "Tata Memorial Hospital", image: "/Hospitals/TMC.png" },
  { name: "Manipal Hospital", image: "/Hospitals/MANIPAL.png" },
  { name: "KMCH", image: "/Hospitals/KMCH.png" },
  { name: "Care24", image: "/Hospitals/CARE24.png" },
  { name: "Ganga Multispeciality Hospital", image: "/Hospitals/GANGA.png" },
  { name: "Methas Hospital", image: "/Hospitals/METHAS.png" }
];

const HospitalList = () => {
  return (
    <div className="bg-white py-8 border-t border-b border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-500 mb-6">
        Our Associate Partners
      </h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: [0, -2000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear"
          }}
        >
          {[...hospitals, ...hospitals].map((hospital, index) => (
            <div key={index} className="flex flex-col items-center gap-2 min-w-max">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-12 h-12 object-contain mix-blend-multiply"
              />
              <span className="text-lg font-medium text-gray-500">{hospital.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HospitalList;

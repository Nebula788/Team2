"use client";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconPhone,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const path = usePathname();
  if (path === "/test") return null;
  return (
    <footer className="bg-orange-300 text-white border-t border-white/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Where we are </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Located in the heart of downtown, just two blocks from the train
            station.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Our team </h3>
          <ul className="space-y-1 text-sm text-white/80">
            <li className="flex items-center gap-2 font-semibold">
              <img src="Gantulga.png" className="size-10 rounded-full" />
              Gantulga{" "}
            </li>
            <li className="flex items-center gap-2 font-semibold">
              <img src="Altai.png" className="size-10 rounded-full" />
              Altai{" "}
            </li>

            <li className="flex items-center gap-2 font-semibold">
              <img src="Telmen.png" className="size-10 rounded-full" />
              Telmen{" "}
            </li>

            <li className="flex items-center gap-2 font-semibold">
              <img src="Nandin.png" className="size-10 rounded-full" />
              Nandin{" "}
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Contact us </h3>
          <p className="text-sm text-white/80 flex gap-1">
            <IconBrandFacebook /> Example.page
          </p>
          <p className="text-sm text-white/80  flex gap-1">
            <IconBrandGoogle /> Example@gmail.com
          </p>
          <p className="text-sm text-white/80  flex gap-1">
            <IconBrandInstagram /> Example_e
          </p>

          <p className="text-lg font-semibold text-white mt-3">
            Call us: <span className="text-white">0000000</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm text-white/70">
        © 2024 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
};
// export const Footer = () => {
//   return (
//     <footer className="bg-brandAccentLight text-brandBlack border-t border-brandBorder/40 mt-20">

//       {/* MAIN CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

//         {/* LOCATION */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-brandBlack">
//             Where we are
//           </h3>
//           <p className="text-sm text-brandBlack/70 leading-relaxed">
//             Located in the heart of downtown, just two blocks from the train station.
//           </p>
//         </div>

//         {/* TEAM */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-brandBlack">
//             Our Team
//           </h3>
//           <ul className="space-y-1 text-sm text-brandBlack/70">
//             <li>Altai</li>
//             <li>Gantulga</li>
//             <li>Nandin</li>
//             <li>Telmen</li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-brandBlack">
//             Contact Us
//           </h3>

//           <div className="space-y-2 text-brandBlack/80 text-sm">
//             <p className="flex items-center gap-2">
//               <img src={"/facebook-logo.png"} className="size-6" />
//               Example.page
//             </p>

//             <p className="flex items-center gap-2">
//               <img src={"/Gmail_icon_(2020).svg.png"} className="size-6" />
//               Example@gmail.com
//             </p>

//             <p className="flex items-center gap-2">
//               <img src={"/instagram-icon.svg"} className="size-6" />
//               Example_e
//             </p>
//           </div>

//           <p className="text-lg font-semibold flex items-center gap-2 text-brandBlack mt-3">
//             Call us:
//             <span className="text-brandBlack">0000000</span>
//           </p>
//         </div>
//       </div>

//       {/* FOOTER BOTTOM BAR */}
//       <div className="border-t border-brandBorder/40 text-center py-4 text-sm text-brandBlack/70">
//         © 2024 Your Company, Inc. All rights reserved.
//       </div>
//     </footer>
//   );
// };

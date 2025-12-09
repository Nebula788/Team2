export const Footer = () => {
  return (
    <footer className="bg-[#8b5e3c] text-white border-t border-white/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Where we are </h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Located in the heart of downtown, just two blocks from the train station.
          </p>
        </div>

       
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Our team </h3>
          <ul className="space-y-1 text-sm text-white/80">
            <li>Nandin </li>
            <li>Altai </li>
            <li>Gantulga </li>
          </ul>
        </div>

   
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Contact us </h3>
          <p className="text-sm text-white/80">Facebook: Example.page</p>
          <p className="text-sm text-white/80">Email: Example@gmail.com</p>
          <p className="text-sm text-white/80">Instagram: Example_e</p>

       
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

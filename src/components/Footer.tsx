export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-2 md:grid-cols-4">
        <div>
          <h2 className="text-white font-semibold mb-4"></h2>
          <h1 className=" text-white font-bold text-2xl leading-relaxed">
              We're we are📍
          </h1>
          <a className="text-yellow-400 inline-block text-1xl">
          haana bgon bnoo
          </a>
        </div>
        <div>
          <h3 className="text-white text-2xl font-semibold mb-4">Our team🫶</h3>
          <ul className="space-y-2 text-lg font-bold">
            <li>
              <a className="text-white">
               Nandin, Tsuki🎀
              </a>
            </li>
            <li>
              <a className="text-white">
                Altai👓
              </a>
            </li>
            <li>
              <a className=" text-white">
                Gantulga🧢
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold  text-xl mb-4">You can contact us by</h3>
          <div className="flex flex-wrap gap-2">
            {["facebook", "instagram", "twitter", "telegram", "email"].map(tag => (
              <span
                key={tag}
                className="border border-gray-600 px-3 py-1 text-xs rounded hover:bg-yellow-400 hover:text-black transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div>
  
          <div className="flex gap-4 mt-6">

          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
          <p> 🎀 2025 | Made with ❤️</p>
          <div className="flex gap-4">
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";

export default function DirectorMessageSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-10 lg:px-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-10">
        Sambutan <span className="text-orange-500">Direktur</span>
      </h2>

      <div className="relative w-full rounded-3xl overflow-hidden shadow-xl">
        {/* Gradient Background (Orange → Purple) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] via-[#EB5F1E] to-[#4C1D95]" />

        {/* Content Wrapper */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* === LEFT TEXT PANEL === */}
          <div className="p-8 md:p-12 text-white">
            <p className="text-sm md:text-base leading-relaxed">
              Komitmen kami adalah mewujudkan lulusan yang tidak hanya memiliki keterampilan dan 
              kecakapan digital, tetapi juga kepribadian yang “unggul” dan “terpercaya”. Kami percaya 
              pada pembentukan karakter yang berlandaskan iman, ketakwaan, kecerdasan, percaya diri, 
              dan kesetiaan pada nilai-nilai Pancasila.
            </p>
          </div>

          {/* === RIGHT PHOTO PANEL === */}
          <div className="relative flex justify-center md:justify-end items-end p-0 md:p-6">
            
            {/* Decorative Arc Shape Behind Image */}
            <div className="absolute right-6 top-6 w-40 h-40 md:w-60 md:h-60 rounded-full border-8 border-[#9990] border-t-transparent border-r-transparent rotate-12" />

            {/* Director Image Dummy */}
            <img
              src="https://via.placeholder.com/350x420.png?text=Foto+Direktur"
              alt="Direktur"
              className="relative z-10 w-48 md:w-64 lg:w-72 object-cover drop-shadow-2xl"
            />

            {/* Name Badge */}
            <div className="absolute bottom-0 right-0 translate-y-1/2 md:translate-y-1/4 bg-[#0F1B47] text-white px-6 py-3 rounded-tl-3xl shadow-lg">
              <h4 className="font-semibold text-sm md:text-base">
                Dr. Wannen Pakpahan, MM.
              </h4>
              <p className="text-xs opacity-80">Direktur Poltek Prestasi Prima</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

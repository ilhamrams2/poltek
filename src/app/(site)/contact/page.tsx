import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-white pt-10 pb-20 overflow-hidden text-gray-900">

      {/* Soft Background Ornaments */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-[#5320C0]/10 blur-[100px] top-[-40px] left-[-60px] rounded-full"></div>
        <div className="absolute w-72 h-72 bg-[#FF6700]/10 blur-[100px] bottom-[-40px] right-[-60px] rounded-full"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-14 md:mb-20 relative z-10 px-4 animate-fade-down">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
          <span className="text-[#FF6700]">Poltek</span>Contact
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Mari terhubung dengan <span className="font-semibold text-[#5320C0]">Politeknik Prestasi Prima</span>.
          Kami siap membantu dan menjawab kebutuhan Anda.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
        <ContactForm />

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-[#5320C0] to-[#7D42FD] rounded-3xl shadow-2xl p-8 sm:p-10 relative overflow-hidden animate-fade-up delay-300">

          <div className="relative z-10 space-y-8 text-white">

            <div>
              <h3 className="text-3xl font-extrabold mb-2">Hubungi Kami</h3>
              <p className="text-white/80">
                Kami siap membantu Anda untuk informasi lebih lanjut mengenai Politeknik Prestasi Prima.
              </p>
            </div>

            <div className="space-y-4 text-white/90">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt size={22} className="shrink-0" /> Jl. Setu Cipayung No.89, RT.009/RW.05, Kec. Cipayung, Jakarta Timur 13890
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope size={20} /> politeknik@prestasiprima.ac.id
              </p>

              <p className="flex items-center gap-3">
                <FaPhone size={20} /> 0813 8000 8079 / 021 8430 6823
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <h4 className="text-lg font-semibold mb-2">Jam Operasional</h4>
              <p className="text-sm">Senin - Jumat : 08.00 - 17.00 WIB</p>
              <p className="text-sm">Sabtu : 08.00 - 15.00 WIB</p>
            </div>

            {/* Social Icons Modern */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Ikuti Kami</h4>
              <div className="flex items-center gap-4">
                <a className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition shadow-lg cursor-pointer">
                  <FaFacebookF />
                </a>
                <a className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition shadow-lg cursor-pointer">
                  <FaInstagram />
                </a>
                <a className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition shadow-lg cursor-pointer">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/6281380008079"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-[#5320C0] font-semibold py-4 rounded-xl shadow-md hover:bg-gray-100 transition active:scale-95"
              >
                Hubungi via WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Extra Map */}
      <div className="container mx-auto mt-20 px-6 animate-fade-up delay-500">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4748268020353!2d106.8972187!3d-6.332476499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2681bc7c67%3A0x777152b1d3f74a62!2sSMK%20Prestasi%20Prima!5e0!3m2!1sid!2sid!4v1756647265168!5m2!1sid!2sid"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

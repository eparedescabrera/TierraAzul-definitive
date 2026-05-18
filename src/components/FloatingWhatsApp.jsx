import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/34000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-nav transition duration-300 hover:-translate-y-1"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

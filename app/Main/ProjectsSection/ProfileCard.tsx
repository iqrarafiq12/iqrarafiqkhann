import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaPinterestP,
  FaInstagram,
  FaEnvelope,
  FaBehance,
  FaYoutube
} from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className="
      bg-secondary
      rounded-3xl
      shadow-2xl
      border border-foreground/5
      flex flex-col items-center text-center
      mx-auto
      
      w-full
      max-w-sm
      sm:max-w-md
      lg:w-[400px]
      
      p-6 sm:p-8
    ">

      {/* Image */}
      <div className="
        relative
        w-full
        aspect-square
        max-w-[300px]
        sm:max-w-[350px]
        rounded-2xl
        overflow-hidden
        mb-6 sm:mb-8
      ">
        <Image
          src="/profile.jpg"
          alt="Iqra Rafiq Khan"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 300px, 350px"
        />
      </div>

      {/* Name */}
      <h2 className="
        text-2xl sm:text-3xl lg:text-4xl
        font-bold
        mb-2
        text-foreground
      ">
        IQRA RAFIQ KHAN
      </h2>

      {/* Role */}
      <p className="text-sm sm:text-base text-dark-2 mb-2">
        Product Designer & Software Developer
      </p>

      {/* Location */}
      <p className="text-xs sm:text-sm text-dark-3 mb-6">
      Karachi, Pakistan | Working Worldwide
      </p>

      {/* Social Icons */}
      <div className="
        flex flex-wrap
        gap-4
        text-[var(--brand-accent)]
        mb-6 sm:mb-8
        justify-center
      ">
        <Link href="https://www.youtube.com/" target="_blank" aria-label="YouTube"
          className="hover:text-primary transition">
          <FaYoutube size={20} />
        </Link>

        <Link href="https://www.linkedin.com/in/iqrarafiqkhann/" target="_blank" aria-label="Linkedin"
          className="hover:text-primary transition">
          <FaLinkedin size={20} />
        </Link>

        <Link href="https://www.instagram.com/iqrarafiqkhann/" target="_blank" aria-label="Instagram"
          className="hover:text-primary transition">
          <FaInstagram size={20} />
        </Link>

        <Link href="https://www.pinterest.com/IqraRafiqKhann/" target="_blank" aria-label="Pinterest"
          className="hover:text-primary transition">
          <FaPinterestP size={20} />
        </Link>

        <Link href="https://www.behance.net/IqraRafiqKhan" target="_blank" aria-label="Behance"
          className="hover:text-primary transition">
          <FaBehance size={20} />
        </Link>

        <Link href="mailto:workwithiqr@example.com" aria-label="Email"
          className="hover:text-primary transition">
          <FaEnvelope size={20} />
        </Link>
      </div>

      {/* Button */}
      <Link href="/contact" className="w-full text-foreground">
        <button className="
          w-full
          py-3
          rounded-xl
          bg-primary
          hover:opacity-90
          transition
          text-foreground
          font-semibold
          text-sm sm:text-base
        ">
          Let’s Talk
        </button>
      </Link>
    </div>
  );
}

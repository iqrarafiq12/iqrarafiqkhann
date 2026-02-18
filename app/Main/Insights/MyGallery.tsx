import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

type InstaPost = {
    id: number;
    image: string;
    url: string;
};

const instagramPosts: InstaPost[] = [
    {
        id: 1,
        image: "/IG-2.png",
        url: "https://www.linkedin.com/posts/iqrarafiqkhann_purpose-in-life-often-begins-with-what-we-activity-7424119345800282112-EByN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzaUlEBGsgXjeAcbT2SASrLjNb9uc3rlUA",
    },
    {
        id: 2,
        image: "/IG-01.png",
        url: "https://www.instagram.com/p/DUh9YNjDOkV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
        {
        id: 3,
        image: "/IG-3.png",
        url: "https://www.instagram.com/p/DTkbBGpjRZI/",
    },
];

export default function MyGallery() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-12 mt-[-100px]
      ml-0 md:ml-[-60px] lg:ml-[-50px]">
            {/* Heading */}
            <div className="text-center mb-6">
                <p className="text-primary font-semibold tracking-widest text-sm">
                    FOLLOW ME ON INSTAGRAM
                </p>
            </div>

            {/* Gallery */}
            <div className="relative">
                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-3 gap-[2px]">
                    {instagramPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden"
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                sizes="16vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                                <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile / Tablet Scroll */}
                <div className="lg:hidden flex gap-2 overflow-x-auto scrollbar-hide px-4">
                    {instagramPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex-shrink-0 w-64 aspect-square group overflow-hidden rounded-lg"
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                sizes="50vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center rounded-lg">
                                <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
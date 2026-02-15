import ProfileCard from "./ProfileCard";
import ScrollContent from "./ScrollContent";

export default function HeroLayout() {
  return (
    <main className="min-h-screen lg:mt-30">
      <div
        className="
          max-w-9xl
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-12
          py-6 sm:py-8 md:py-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6 sm:gap-8 lg:gap-16
            items-start
          "
        >
          {/* LEFT - Profile Card */}
          <div
            className="
              relative
              lg:sticky
              lg:top-24
              h-fit
              flex
              justify-center lg:justify-start
            "
          >
            <ProfileCard />
          </div>

          {/* RIGHT - Scroll Content */}
         
            <ScrollContent />
        </div>
        
      </div>
    </main>
  );
}

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export function HeroSection() {
  return (
    <section className="md:py-24 py-16 md:px-5 relative h-[calc(100vh-80px)] ">
      <img
        className="md:block hidden absolute right-0 top-0 z-[250]"
        src="top-left.svg"
        alt="top-left-blur"
      />
      <img
        className="md:hidden block absolute right-0 top-0 z-[250]"
        src="mobile-top-left.svg"
        alt="mobile-top-left-blur"
      />
      <img
        className="md:hidden block absolute left-0 top-0 z-[250]"
        src="mobile-bottom-right.svg"
        alt="mobile-bottom-right-blur"
      />
      <img
        src="stars.svg"
        alt="stars"
        className="absolute inset-0 size-full z-[200] object-cover"
      />

      <video
        src="hero-vid.mp4"
        className="absolute md:block hidden inset-0 w-full h-full object-cover z-20"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        preload="metadata"
      />

      <div className="max-w-[1352px] mx-auto relative z-[250] size-full h-full pb-[100px]  ">
        <div className="w-full md:w-[543px]  flex justify-between flex-col md:h-full max-md:flex max-md:flex-col max-md:items-center  max-md:mx-auto max-md:text-center">
          <div className="md:space-y-8 w-full">
            <h1 className="font-cal text-4xl sm:text-5xl l md:text-[80px] bg-[radial-gradient(48.44%_187.46%_at_50%_50%,_#FFFFFF_57.39%,_rgba(255,_255,_255,_0.4)_91.18%)] text-transparent bg-clip-text text-shadow-[0px_12.1px_90.72px_0px_#00000099] leading-[36px] md:leading-[100%] max-md:mx-auto max-md:text-center">
              Tokenized <br className="block md:hidden" /> Assets. Unlocked.
            </h1>
            <p className="font-normal text-base md:text-lg/[24px] font-fig max-w-[320px] md:py-0 py-4 max-md:mx-auto max-md:text-center">
              Rockbit makes investing in tokenized stocks and real-world assets
              accessible, secure, and DeFi-native. Built for everyone backed by
              blockchain.
            </p>
            <div className="flex md:hidden gap-4 md:gap-4.5 w-full md:flex-col flex-row  sm:w-[200px] md:w-[125px] max-md:justify-center max-md:items-center max-md:mx-auto">
              <Button variant={"secondary"} className="md:w-full">
                Start investing
              </Button>

              <Button className="md:w-full">Explore assets</Button>
            </div>
          </div>
          <video
            src="hero-vid.mp4"
            className=" md:hidden block  w-full h-[400px] object-cover z-20"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            preload="metadata"
          />
        </div>

        <div className="md:flex gap-4 md:gap-6 w-full md:justify-between  hidden  items-center absolute ">
          <div className="hidden md:flex gap-4 md:gap-4.5 w-full md:flex-col flex-row  sm:w-[200px] md:w-[125px] max-md:justify-center max-md:items-center max-md:mx-auto">
            <Button variant={"secondary"} className="md:w-full">
              Start investing
            </Button>

            <Button className="md:w-full">Explore assets</Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icons.ethLogo className="size-8 md:size-10" />
              <span className="font-semibold font-fig text-xl md:text-2xl/[32px]">
                Ethereum
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/coinbase.png" alt="C" className="size-8 md:size-10" />
              <span className="font-semibold font-fig text-xl md:text-2xl/[32px]">
                Coinbase
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pointer-events-none">
        <video
          src="/hero-vid.mp4"
          className="absolute inset-0 size-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          webkit-playsinline="true"
          preload="metadata"
          onLoadStart={(e) => {
            const video = e.target as HTMLVideoElement;
            video.muted = true;
            video.play().catch(() => {});
          }}
        />
      </div> */}
    </section>
  );
}

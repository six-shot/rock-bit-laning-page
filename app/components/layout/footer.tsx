import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export function Footer() {
  return (
    <footer className="bg-background relative px-5 pt-[206px]">
      <img
        src="/features/footer-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="w-full max-w-[693px] mx-auto pb-[150px] space-y-10 relative">
        <div className="space-y-6">
          <h6 className="font-cal text-4xl sm:text-5xl md:text-[80px] bg-[radial-gradient(48.44%_187.46%_at_50%_50%,_#FFFFFF_57.39%,_rgba(255,_255,_255,_0.4)_91.18%)] text-transparent bg-clip-text text-shadow-[0px_12.1px_90.72px_0px_#00000099] -tracking-[2%] font-normal mx-auto text-center">
            Start Investing with Rockbit Today
          </h6>

          <p className="font-normal text-lg/[24px] font-fig text-center">
            Buy tokenized assets, manage your portfolio, and participate in DeFi
            all from one clean interface.
          </p>
        </div>

        <div className="max-w-[189px] mx-auto w-full">
          <Button variant={"secondary"} className="w-full">
            Join now
          </Button>
        </div>
      </div>

      <div className="min-h-[136px] w-full px-5 py-12 relative">
        <div className="max-w-[1312px] lg:h-10 flex items-center justify-between px-8 mx-auto relative flex-col md:flex-row gap-5">
          <div className="flex items-center gap-1">
            <Icons.logo className="size-10" />
            <span className="font-medium text-2xl font-fig">Rockbit</span>
          </div>

          <div className="flex items-center gap-6 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
            <Icons.twitter />
            <Icons.telegram />
            <Icons.medium />
          </div>

          <p className="font-normal font-fig text-base max-md:text-center">
            © 2077 Rockbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

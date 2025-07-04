import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export function FeaturesSection() {
  return (
    <section className="pt-24 px-5 relative">
      <img
        src="/features/features-bg.png"
        alt=""
        className="size-full absolute inset-0"
      />
      <div className="max-w-[1316px] mx-auto space-y-16 pb-36.5 relative">
        <h2 className="font-cal text-4xl sm:text-5xl md:text-[64px] bg-[radial-gradient(48.44%_187.46%_at_50%_50%,_#FFFFFF_57.39%,_rgba(255,_255,_255,_0.4)_91.18%)] text-transparent bg-clip-text text-shadow-[0px_12.1px_90.72px_0px_#00000099] -tracking-[2%] font-normal max-w-[543px] mx-auto text-center">
          Simple. Secure. Scalable.
        </h2>

        <div className="flex gap-10 flex-col">
          <div className="h-auto md:h-[500px] w-full bg-[#171A22] border-[1.4px] border-white/10 rounded-[40px] relative overflow-hidden flex flex-col md:flex-row font-fig">
            <img
              src="/feature-dots.png"
              alt=""
              className="size-full absolute inset-0"
            />

            <div className="p-6 md:p-10 flex flex-col justify-between max-w-full md:max-w-[492px] h-auto md:h-full z-10">
              <p className="font-fig font-medium text-xl/[32px] text-white/80">
                Why us
              </p>

              <div className="space-y-6">
                <div className="space-y-2 font-medium font-fig">
                  <header className=" max-w-[353px] text-2xl md:text-4xl lg:text-[40px]/[48px]">
                    Tokenized Equities & Assets
                  </header>
                  <p className="text-sm md:text-base text-white/80">
                    Invest in tokenized shares of leading global
                    companies—available onchain, 24/7, without intermediaries or
                    market hour restrictions.
                  </p>
                </div>

                <Button variant={"tertiary"} className="max-w-[311px] w-full">
                  Get started
                </Button>
              </div>
            </div>

            <div className="h-[300px] md:h-full w-full max-w-full md:max-w-[824px] relative md:absolute right-0 top-0 bottom-0">
              <img
                src="/crypto-market.png"
                alt="Feature Hero"
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="flex gap-10 flex-col md:flex-row">
            <div className="overflow-hidden rounded-[40px] bg-[#171A22] border-[1.4px] border-white/10 w-full md:max-w-[563px] h-auto md:h-[760px] relative flex flex-col gap-12">
              <img
                src="/features/defi-bg.png"
                alt=""
                className="size-full absolute inset-0"
              />
              <div className="w-full px-6 md:pl-10 md:pr-8 pt-6 space-y-6 font-fig relative z-10">
                <p className="font-medium text-xl/[32px] text-white/80">
                  Why us
                </p>
                <div className="space-y-6">
                  <div className="space-y-2 font-medium font-fig">
                    <header className=" max-w-[353px] text-2xl md:text-4xl lg:text-[40px]/[48px]">
                      DeFi-Compatible
                    </header>
                    <p className="text-sm md:text-base text-white/80 max-w-[417px]">
                      Seamless integration with major DeFi protocols. Trade,
                      lend, or stake your assets effortlessly.
                    </p>
                  </div>

                  <Button variant={"tertiary"} className="max-w-[311px] w-full">
                    Get started
                  </Button>
                </div>
              </div>

              <div className="w-full h-[300px] md:h-full">
                <img
                  src="/features/defi-compatible.png"
                  alt="Feature Hero"
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[40px] bg-[#171A22] border-[1.4px] border-white/10 w-full md:max-w-[709px] h-auto md:h-[760px] relative p-6 md:p-10">
              <img
                src="/features/Decentralized Network.png"
                alt="Decentralized Network"
                className="size-[300px] md:size-[498px] absolute max-sm:left-1/2 md:left-0 lg:left-[106px] top-10 -translate-x-1/2 md:translate-x-0 inset-0"
              />
              <div className="w-full h-full font-fig relative z-10 flex flex-col justify-between min-h-[400px] md:min-h-0">
                <p className="font-medium text-xl/[32px] text-white/80">
                  Why us
                </p>
                <div className="space-y-6">
                  <div className="space-y-2 font-medium font-fig">
                    <header className=" max-w-[353px] text-2xl md:text-4xl lg:text-[40px]/[48px]">
                      Borderless & Accessible
                    </header>
                    <p className="text-sm md:text-base text-white/80 max-w-[417px]">
                      No banks. No middlemen. Just assets at your fingertips
                      wherever you are.
                    </p>
                  </div>

                  <Button variant={"tertiary"} className="max-w-[311px] w-full">
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto md:h-[500px] w-full bg-[#171A22] border-[1.4px] border-white/10 rounded-[40px] relative overflow-hidden flex flex-col md:flex-row font-fig">
            <img
              src="/feature-dots.png"
              alt=""
              className="size-full absolute inset-0"
            />

            <div className="p-6 md:p-10 flex flex-col justify-between max-w-full md:max-w-[492px] h-auto md:h-full z-10">
              <p className="font-fig font-medium text-xl/[32px] text-white/80">
                Why us
              </p>

              <div className="space-y-6">
                <div className="space-y-2 font-medium font-fig">
                  <header className=" max-w-[353px] text-2xl md:text-4xl lg:text-[40px]/[48px]">
                    Regulatory-Ready
                  </header>
                  <p className="text-sm md:text-base text-white/80 max-w-[599px]">
                    We partner with fully licensed custodians and regulated
                    entities to ensure secure, compliant access to tokenized
                    financial instruments—giving you peace of mind while
                    investing in real-world assets onchain.
                  </p>
                </div>

                <Button variant={"tertiary"} className="max-w-[311px] w-full">
                  Get started
                </Button>
              </div>
            </div>

            <div className="h-[300px] md:h-full w-full max-w-full relative md:absolute right-0 top-0 bottom-0">
              <img
                src="/features/Governance Token.png"
                alt="Feature Hero"
                className="size-full object-cover object-right max-md:hidden"
              />
              <img
                src="/features/Governance Token -mobile.png"
                alt="Feature Hero"
                className="size-full object-cover md:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 space-y-14 relative max-w-[1352px] mx-auto">
        <h3 className="font-cal text-4xl sm:text-5xl md:text-[64px] bg-[radial-gradient(48.44%_187.46%_at_50%_50%,_#FFFFFF_57.39%,_rgba(255,_255,_255,_0.4)_91.18%)] text-transparent bg-clip-text text-shadow-[0px_12.1px_90.72px_0px_#00000099] -tracking-[2%] font-normal max-w-[543px] mx-auto text-center">
          Featured products
        </h3>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#171A22] p-8 rounded-[40px] border-[1.4px] border-white/10 space-y-6">
            <div>
              <Icons.xStocks className="size-[100px]" />
            </div>

            <div className="space-y-1">
              <header className="font-normal font-cal text-[32px]/[48px]">
                xStocks by Rockbit
              </header>
              <p className="font-medium text-base font-fig text-white/80">
                Buy and trade tokenized stocks from leading companies around the
                world.
              </p>
            </div>
          </div>

          <div className="bg-[#171A22] p-8 rounded-[40px] border-[1.4px] border-white/10 space-y-6">
            <div>
              <Icons.assetVault className="size-[100px]" />
            </div>

            <div className="space-y-1">
              <header className="font-normal font-cal text-[32px]/[48px]">
                Asset Vault
              </header>
              <p className="font-medium text-base font-fig text-white/80">
                Your secure, onchain storage for tokenized assets powered by
                multi-sig.
              </p>
            </div>
          </div>

          <div className="bg-[#171A22] p-8 rounded-[40px] border-[1.4px] border-white/10 space-y-6">
            <div>
              <Icons.yieldHub className="size-[100px]" />
            </div>

            <div className="space-y-1">
              <header className="font-normal font-cal text-[32px]/[48px]">
                Yield Hub
              </header>
              <p className="font-medium text-base font-fig text-white/80">
                Generate passive income by staking your tokenized assets or
                participating in curated liquidity pools.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1352px] mx-auto pt-24 pb-[195px] space-y-[105px] relative z-20">
        <h4 className="font-cal text-4xl sm:text-5xl md:text-[64px] bg-[radial-gradient(48.44%_187.46%_at_50%_50%,_#FFFFFF_57.39%,_rgba(255,_255,_255,_0.4)_91.18%)] text-transparent bg-clip-text text-shadow-[0px_12.1px_90.72px_0px_#00000099] -tracking-[2%] font-normal mx-auto text-center">
          Who Is Rockbit For?
        </h4>

        <div className="w-full max-w-[470px] mx-auto h-[544px] bg-[#171A22] border border-white/10 rounded-[40px] p-4 sm:p-10 space-y-6">
          <img
            src="/features/who.jpg"
            alt=""
            className="w-full h-[408px] rounded-3xl object-center object-cover"
          />
          <p className="font-fig text-xl max-sm:text-center sm:text-2xl font-medium">
            Global investors tired of borders
          </p>
        </div>
      </div>
    </section>
  );
}

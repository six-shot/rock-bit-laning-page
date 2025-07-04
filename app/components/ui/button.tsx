import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-fig",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-[#0E121B] hover:bg-primary/90 border-btn shadow-[0px_0px_0px_1px_#242628,0px_1px_2px_0px_#1B1C1D7A]",
        secondary:
          "bg-[#335CFF] text-white shadow-xs hover:bg-[#335CFF]/80 shadow-[0px_0px_0px_1px_#335CFF,0px_1px_2px_0px_#0E121B3D]",
        tertiary:
          "bg-white/8 px-4.5 hover:bg-white/10 shadow-[0px_0px_0px_1px_#12376914,0px_1px_2px_0px_#2A3B511F] backdrop-blur-[30px]",
      },
      size: {
        default: "h-10 p-2.5 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

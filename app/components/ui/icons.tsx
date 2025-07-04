type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
};

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5896 39.1943V30.9135C14.5896 30.9135 16.4382 31.8512 17.7201 32.1253C19.417 32.4882 20.4613 32.4627 22.1635 32.1253C23.2644 31.9071 23.8679 31.6802 24.8901 31.2165C26.3445 30.5567 27.1627 30.0917 28.3235 28.9948C29.1383 28.2249 29.2921 27.505 30.1413 26.7732C30.9456 26.0799 31.4837 25.7678 32.4639 25.3594C33.294 25.0135 33.8012 24.9164 34.6856 24.7535C36.3537 24.4461 39.0279 24.6525 39.0279 24.6525C39.0279 24.6525 39.0699 25.2089 39.0279 25.5613C38.9644 26.094 38.8012 26.3679 38.624 26.8741C38.0878 28.4057 37.6674 29.2353 36.8063 30.6106C35.56 32.601 34.6545 33.6308 32.8679 35.1549C31.3949 36.4113 30.4625 37.0225 28.7275 37.8815C26.861 38.8056 25.7228 39.2013 23.6782 39.5982C21.6617 39.9897 20.4711 40.1042 18.427 39.9012C17.6721 39.8262 16.5083 39.5982 16.5083 39.5982L14.5896 39.1943Z"
        fill="#335CFF"
      />
      <path
        d="M3.98625 31.9235C5.24409 33.5594 7.72269 35.6599 7.72269 35.6599L7.92471 18.3915C7.92471 18.3915 8.28176 16.5604 8.73259 15.463C9.21587 14.2866 9.56853 13.6401 10.3483 12.6354C11.463 11.1993 12.318 10.5313 13.8828 9.60584C15.4084 8.70354 16.3748 8.27537 18.1242 7.99009C19.5254 7.76158 21.7596 7.99009 21.7596 7.99009C21.7596 7.99009 23.136 8.2891 23.9813 8.596C25.4074 9.11375 26.208 9.4942 27.4148 10.4137C28.5462 11.2758 28.8603 12.1126 29.9394 13.0393C30.6874 13.6817 31.0898 14.089 31.9591 14.5541C32.7731 14.9896 33.2819 15.1514 34.1808 15.362C36.0626 15.8028 39.129 15.261 39.129 15.261C39.129 15.261 39.1631 14.7054 39.129 14.3521C39.0403 13.4332 38.6815 12.9804 38.3211 12.1305C37.7289 10.7336 37.3574 9.95096 36.5034 8.69698C35.5908 7.35699 34.9415 6.69425 33.7768 5.56645C32.8078 4.62808 32.2332 4.12373 31.1319 3.34479C29.9121 2.48204 29.1912 2.02232 27.8187 1.4319C26.131 0.705853 25.0923 0.480209 23.2744 0.214256C21.0111 -0.116847 19.6924 -0.0220873 17.4173 0.214256C15.7833 0.384002 14.8376 0.445319 13.2769 0.95823C10.984 1.71176 9.82694 2.56287 7.92471 4.04832C6.25286 5.35387 5.3714 6.20331 4.08392 7.88911C2.84014 9.51769 2.21927 10.53 1.46026 12.4334C0.840238 13.9883 0.623847 14.9223 0.350847 16.5738C-0.104284 19.3272 -0.129445 20.9708 0.350847 23.7199C0.598437 25.1371 0.786399 25.936 1.30429 27.2782C2.05837 29.2325 2.70941 30.2629 3.98625 31.9235Z"
        fill="#335CFF"
      />
      <circle cx="19.8407" cy="19.9062" r="5.9581" fill="#335CFF" />
    </svg>
  ),
  ethLogo: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.9998 1.66669C9.8665 1.66669 1.6665 9.86669 1.6665 20C1.6665 30.1334 9.8665 38.3334 19.9998 38.3334C30.1332 38.3334 38.3332 30.1334 38.3332 20C38.3332 9.86669 30.1332 1.66669 19.9998 1.66669ZM19.9998 31.6667L13.3332 21.4667L19.9998 25.8334L26.6665 21.4667L19.9998 31.6667ZM19.9998 24.3667L13.3332 20L19.9998 8.33335L26.6665 20L19.9998 24.3667Z"
        fill="white"
      />
    </svg>
  ),

  xStocks: (props: IconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        fill="url(#paint0_linear_17_4938)"
        fill-opacity="0.06"
      />
      <circle
        cx="50"
        cy="50"
        r="49.375"
        stroke="url(#paint1_linear_17_4938)"
        stroke-opacity="0.04"
        stroke-width="1.25"
      />
      <foreignObject x="-22.0017" y="-22.0002" width="144" height="144">
        <div
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#bgblur_0_17_4938_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g filter="url(#filter0_d_17_4938)" data-figma-bg-blur-radius="40">
        <circle
          cx="49.9983"
          cy="49.9998"
          r="32"
          fill="white"
          fill-opacity="0.1"
          shape-rendering="crispEdges"
        />
        <circle
          cx="49.9983"
          cy="49.9998"
          r="31.75"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M44.001 39.4998H48.501V52.9998H44.001V57.4998H41.001V52.9998H36.501V39.4998H41.001V34.9998H44.001V39.4998ZM59.001 46.9998H63.501V60.4998H59.001V64.9998H56.001V60.4998H51.501V46.9998H56.001V42.4998H59.001V46.9998Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_17_4938"
          x="-22.0017"
          y="-22.0002"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_17_4938"
          />
          <feOffset dy="1.5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_4938"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_4938"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_0_17_4938_clip_path"
          transform="translate(22.0017 22.0002)"
        >
          <circle cx="49.9983" cy="49.9998" r="32" />
        </clipPath>
        <linearGradient
          id="paint0_linear_17_4938"
          x1="51.2738"
          y1="-1.80014e-07"
          x2="50"
          y2="105.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAECF0" />
          <stop offset="1" stop-color="#EAECF0" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_17_4938"
          x1="37"
          y1="-10.5"
          x2="39"
          y2="97.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAECF0" />
          <stop offset="1" stop-color="#EAECF0" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  assetVault: (props: IconProps) => (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="50.3333"
        cy="50"
        r="50"
        fill="url(#paint0_linear_17_4960)"
        fill-opacity="0.06"
      />
      <circle
        cx="50.3333"
        cy="50"
        r="49.375"
        stroke="url(#paint1_linear_17_4960)"
        stroke-opacity="0.04"
        stroke-width="1.25"
      />
      <foreignObject x="-21.6685" y="-22.0002" width="144" height="144">
        <div
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#bgblur_0_17_4960_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g filter="url(#filter0_d_17_4960)" data-figma-bg-blur-radius="40">
        <circle
          cx="50.3315"
          cy="49.9998"
          r="32"
          fill="white"
          fill-opacity="0.1"
          shape-rendering="crispEdges"
        />
        <circle
          cx="50.3315"
          cy="49.9998"
          r="31.75"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M48.834 42.5V38C48.834 37.6022 48.992 37.2206 49.2733 36.9393C49.5546 36.658 49.9362 36.5 50.334 36.5H63.834C64.2318 36.5 64.6133 36.658 64.8946 36.9393C65.176 37.2206 65.334 37.6022 65.334 38V62C65.334 62.3978 65.176 62.7794 64.8946 63.0607C64.6133 63.342 64.2318 63.5 63.834 63.5H36.834C36.4362 63.5 36.0546 63.342 35.7733 63.0607C35.492 62.7794 35.334 62.3978 35.334 62V44C35.334 43.6022 35.492 43.2206 35.7733 42.9393C36.0546 42.658 36.4362 42.5 36.834 42.5H48.834ZM39.834 56V59H47.334V56H39.834ZM53.334 56V59H60.834V56H53.334ZM53.334 51.5V54.5H60.834V51.5H53.334ZM53.334 47V50H60.834V47H53.334ZM39.834 51.5V54.5H47.334V51.5H39.834Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_17_4960"
          x="-21.6685"
          y="-22.0002"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_17_4960"
          />
          <feOffset dy="1.5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_4960"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_4960"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_0_17_4960_clip_path"
          transform="translate(21.6685 22.0002)"
        >
          <circle cx="50.3315" cy="49.9998" r="32" />
        </clipPath>
        <linearGradient
          id="paint0_linear_17_4960"
          x1="51.607"
          y1="-1.80014e-07"
          x2="50.3333"
          y2="105.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAECF0" />
          <stop offset="1" stop-color="#EAECF0" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_17_4960"
          x1="37.3333"
          y1="-10.5"
          x2="39.3333"
          y2="97.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAECF0" />
          <stop offset="1" stop-color="#EAECF0" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  yieldHub: (props: IconProps) => (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="50.6665"
        cy="50"
        r="50"
        fill="url(#paint0_linear_17_4982)"
        fill-opacity="0.06"
      />
      <circle
        cx="50.6665"
        cy="50"
        r="49.375"
        stroke="url(#paint1_linear_17_4982)"
        stroke-opacity="0.04"
        stroke-width="1.25"
      />
      <foreignObject x="-21.3355" y="-22.0002" width="144" height="144">
        <div
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#bgblur_0_17_4982_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g filter="url(#filter0_d_17_4982)" data-figma-bg-blur-radius="40">
        <circle
          cx="50.6646"
          cy="49.9998"
          r="32"
          fill="white"
          fill-opacity="0.1"
          shape-rendering="crispEdges"
        />
        <circle
          cx="50.6646"
          cy="49.9998"
          r="31.75"
          stroke="white"
          stroke-opacity="0.1"
          stroke-width="0.5"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M67.1675 49.9998V52.9998C67.1675 57.9708 59.78 61.9998 50.6675 61.9998C41.717 61.9998 34.4315 58.1133 34.175 53.2653L34.1675 52.9998V49.9998C34.1675 54.9708 41.555 58.9998 50.6675 58.9998C59.78 58.9998 67.1675 54.9708 67.1675 49.9998ZM50.6675 37.9998C59.78 37.9998 67.1675 42.0288 67.1675 46.9998C67.1675 51.9708 59.78 55.9998 50.6675 55.9998C41.555 55.9998 34.1675 51.9708 34.1675 46.9998C34.1675 42.0288 41.555 37.9998 50.6675 37.9998Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_17_4982"
          x="-21.3355"
          y="-22.0002"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_17_4982"
          />
          <feOffset dy="1.5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0980392 0 0 0 0 0.156863 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_4982"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_17_4982"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_0_17_4982_clip_path"
          transform="translate(21.3355 22.0002)"
        >
          <circle cx="50.6646" cy="49.9998" r="32" />
        </clipPath>
        <linearGradient
          id="paint0_linear_17_4982"
          x1="51.9403"
          y1="-1.80014e-07"
          x2="50.6665"
          y2="105.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAECF0" />
          <stop offset="1" stop-color="#EAECF0" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_17_4982"
          x1="37.6665"
          y1="-10.5"
          x2="39.6665"
          y2="97.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EAECF0" />
          <stop offset="1" stop-color="#EAECF0" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  twitter: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9 9.2L18.7 1.5H17.1L11.2 8.3L6.5 1.5H1L8.1 10.9L1 19H2.6L8.8 11.8L13.8 19H19.3L11.9 9.2ZM9.6 10.9L8.9 9.9L3.2 2.7H5.7L10.2 8.4L10.9 9.4L17.1 17.9H14.6L9.6 10.9Z"
        fill="currentColor"
      />
    </svg>
  ),

  telegram: (props: IconProps) => (
    <svg
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.1105 1.43971C18.2517 0.527216 17.3841 -0.193022 16.5728 0.163205L0.413286 7.25807C-0.168538 7.51353 -0.125977 8.39489 0.477462 8.58702L3.80991 9.64828C4.44601 9.85084 5.13467 9.74605 5.69011 9.36235L13.2035 4.1716C13.43 4.01504 13.677 4.33722 13.4834 4.53672L8.07512 10.1126C7.55049 10.6536 7.6546 11.5702 8.28572 11.9659L14.3408 15.763C15.02 16.1888 15.8936 15.7611 16.0206 14.9403L18.1105 1.43971Z"
        fill="currentColor"
      />
    </svg>
  ),

  gitbook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      {...props}
    >
      <path
        d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"
        fill="currentColor"
      />
    </svg>
  ),

  medium: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="179.649" fill="black" />
      <path
        d="M1024 704.736V797.736C1018.16 798.3 1012.16 798.588 1006 798.588C896.061 798.588 834.166 707.016 831.497 592.432C831.418 588.002 831.448 583.6 831.546 579.228C831.606 576.501 831.714 573.783 831.852 571.075C831.921 569.628 831.989 568.269 832.098 566.753C832.206 565.236 832.315 563.72 832.443 562.204C836.401 511.613 852.687 466.594 879.568 433.284C896.267 412.606 916.334 396.852 939.09 386.316C959.078 376.253 987.17 370.699 1010.07 370.699H1011.06C1015.4 370.699 1019.71 370.844 1024 371.13V396.717C1019.45 395.47 1014.58 394.801 1009.4 394.715C963.086 395.67 935.486 451.145 932.049 528.007H1024V549.669H929.972L929.942 549.689C925.703 624.579 966.692 687.87 1024 704.736Z"
        fill="currentColor"
      />
      <path
        d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z"
        fill="currentColor"
      />
    </svg>
  ),
};

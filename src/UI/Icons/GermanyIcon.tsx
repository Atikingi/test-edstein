const GermanyIcon = () => {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="21" height="15" rx="2" fill="white" />
      <mask id="mask0_1406_226" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="16">
        <rect x="0.5" y="0.5" width="21" height="15" rx="2" fill="white" />
      </mask>
      <g mask="url(#mask0_1406_226)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 5.5H21.5V0.5H0.5V5.5Z" fill="#262626" />
        <g filter="url(#filter0_d_1406_226)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 10.5H21.5V5.5H0.5V10.5Z"
            fill="#F01515"
          />
        </g>
        <g filter="url(#filter1_d_1406_226)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.5 15.5H21.5V10.5H0.5V15.5Z"
            fill="#FFD521"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1406_226"
          x="0.5"
          y="5.5"
          width="21"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1406_226" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1406_226"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1406_226"
          x="0.5"
          y="10.5"
          width="21"
          height="5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1406_226" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1406_226"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default GermanyIcon;

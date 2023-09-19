export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        className="animate-spin duration-200"
      >
        <rect
          width="29"
          height="29"
          transform="translate(0.5)"
          fill="white"
          style={{ mixBlendMode: "multiply" }}
        />
        <path
          d="M3.21875 14.5C3.21875 11.3754 4.45999 8.37881 6.6694 6.1694C8.87881 3.95998 11.8754 2.71875 15 2.71875C18.1246 2.71875 21.1212 3.95999 23.3306 6.1694C25.54 8.37881 26.7813 11.3754 26.7812 14.5C26.7812 17.6246 25.54 20.6212 23.3306 22.8306C21.1212 25.04 18.1246 26.2813 15 26.2812C11.8754 26.2812 8.87881 25.04 6.6694 22.8306C4.45999 20.6212 3.21875 17.6246 3.21875 14.5L3.21875 14.5Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="5.4375"
        />
        <path
          d="M3.21875 14.5C3.21875 12.012 4.00639 9.58795 5.46877 7.57515C6.93115 5.56236 8.99321 4.06418 11.3594 3.29536C13.7256 2.52654 16.2744 2.52655 18.6406 3.29537C21.0068 4.06419 23.0689 5.56236 24.5312 7.57516"
          stroke="url(#paint0_linear_940_4015)"
          stroke-width="5.4375"
        />
        <defs>
          <linearGradient
            id="paint0_linear_940_4015"
            x1="15"
            y1="0"
            x2="15"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F24F9D" />
            <stop offset="1" stop-color="#5F4AFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

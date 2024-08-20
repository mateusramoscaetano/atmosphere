interface ILogoFormoProps {
  color: string;
  className: string;
}

export function LogoFormo({ color, className }: ILogoFormoProps) {
  return (
    <>
      <svg
        width="165"
        height="84"
        viewBox="0 0 165 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_709)">
          <path
            d="M149.255 34.5081C140.669 34.5081 134.439 40.5747 134.439 48.9382C134.439 57.3018 140.669 63.3684 149.255 63.3684C157.84 63.3684 164.07 57.3018 164.07 48.9382C164.07 40.5747 157.84 34.5081 149.255 34.5081ZM156.069 48.9382C156.069 53.044 153.204 56.0267 149.255 56.0267C145.305 56.0267 142.441 53.044 142.441 48.9382C142.441 44.8324 145.245 41.8497 149.255 41.8497C153.265 41.8497 156.069 44.7634 156.069 48.9382Z"
            fill="white"
          />
          <path
            d="M42.1926 23.4978C33.6073 23.4978 27.3774 29.5645 27.3774 37.928C27.3774 46.2915 33.6073 52.3582 42.1926 52.3582C50.7779 52.3582 57.0078 46.2915 57.0078 37.928C57.0078 29.5645 50.7779 23.4978 42.1926 23.4978ZM49.0066 37.928C49.0066 42.0338 46.1418 45.0165 42.1926 45.0165C38.2435 45.0165 35.3786 42.0338 35.3786 37.928C35.3786 33.8222 38.1827 30.8395 42.1926 30.8395C46.2025 30.8395 49.0066 33.7531 49.0066 37.928Z"
            fill="white"
          />
          <path
            d="M158.415 23.4978H140.094V30.8395H158.415V23.4978Z"
            fill="white"
          />
          <path
            d="M143.127 66.9772C143.081 71.0324 140.23 73.9645 136.313 73.9645C134.215 73.9645 132.425 73.1221 131.205 71.7182C130.13 70.48 129.499 68.8 129.499 66.8759V54.7104H129.518V53.5689C129.518 45.21 123.288 39.1387 114.703 39.1387C110.385 39.1387 106.599 40.6393 103.888 43.3918C101.178 40.6393 97.3921 39.1387 93.0737 39.1387C90.5547 39.1387 88.2413 39.6634 86.227 40.6116V38.1675H78.2585V67.037H86.227V54.7104H86.2597V53.5689C86.2597 49.394 89.0638 46.4804 93.0737 46.4804C97.0836 46.4804 99.8877 49.394 99.8877 53.5689V54.7104H99.9018V67.037H107.87V54.7104H107.884V53.5689C107.884 49.394 110.688 46.4804 114.698 46.4804C118.708 46.4804 121.395 49.2789 121.508 53.3157H121.494V66.8759C121.494 69.228 121.984 71.396 122.886 73.3016C123.087 73.7251 123.307 74.1348 123.545 74.5306C123.784 74.9265 124.041 75.3085 124.321 75.6767C126.948 79.1658 131.215 81.3061 136.309 81.3061H137.468V81.2647C145.413 80.7446 151.073 74.9035 151.119 66.9772H143.118H143.127Z"
            fill="white"
          />
          <path
            d="M15.9742 15.0147C15.9742 12.2161 17.1099 10.0343 19.1756 8.86054C21.3021 7.64997 24.0922 7.67758 26.2841 8.92038C27.4758 9.59701 28.3685 10.5682 28.9293 11.765L35.4068 7.12523C32.8598 3.10227 28.3124 0.584473 22.7882 0.584473C14.2029 0.584473 7.97308 6.65113 7.97308 15.0147V69.1589C7.97308 73.2647 5.10819 76.2474 1.15904 76.2474H0V83.5891H1.15904C9.74436 83.5891 15.9742 77.5224 15.9742 69.1589V30.8395H24.4474V23.4794H15.9742V15.0147Z"
            fill={color}
          />
          <path
            d="M69.8417 25.4771V23.4978H61.9434V52.3582H69.8417L69.8557 36.5931C69.8557 34.126 72.0616 30.8395 75.6228 30.8395H78.2027V23.4978H75.6228C73.1973 23.4978 71.412 24.446 69.8417 25.4771Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_709">
            <rect
              width="164.07"
              height="83"
              fill="white"
              transform="translate(0 0.584473)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

const RIFFAI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
    <path
      d="M8 12L12 8L16 12L12 16L8 12Z"
      fill="currentColor"
      opacity={0.7}
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);
export default RIFFAI;
const Logo = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    role="img"
    aria-label="Júlio Silvestre — início"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="12" className="fill-primary" />
    <g
      fill="none"
      className="stroke-primary-foreground"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 13v14a6 6 0 0 1-6 6 6 6 0 0 1-5.5-3.5" />
      <path d="M38 17.5C38 14.8 36 13 33 13s-5 1.8-5 4.5c0 6 10 3.5 10 10.5 0 2.7-2 5-5 5s-5-2.2-5-5" />
    </g>
  </svg>
);

export default Logo;

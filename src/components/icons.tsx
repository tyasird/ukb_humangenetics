import { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65" />
      <polygon points="15 4 18 4 18 7 17 7 17 5 15 5" />
      <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19" />
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle fill="none" stroke="currentColor" strokeWidth="1.1" cx="9" cy="9" r="7" />
      <path fill="none" stroke="currentColor" strokeWidth="1.1" d="M14,14 L18,18 L14,14 Z" />
    </svg>
  );
}

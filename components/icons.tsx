import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function ArrowRight(props: IconProps) {
  return <svg {...base} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

export function Mail(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

export function Facebook(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.59-1.56h1.7V3.34a22 22 0 0 0-2.48-.13c-2.45 0-4.13 1.5-4.13 4.25V9.8H7.4V13h2.78v8h3.32Z" /></svg>;
}

export function Menu(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function Close(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function Sun(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>;
}

export function Moon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /></svg>;
}

export function Check(props: IconProps) {
  return <svg {...base} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}

export function Code(props: IconProps) {
  return <svg {...base} {...props}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>;
}

export function Layers(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
}

export function PenTool(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 19 7-7 3 3-7 7-3-3Z" /><path d="m18 13-1.5-7.5L3 2l3.5 13.5L14 17M3 2l7.5 7.5" /><circle cx="11" cy="10" r="2" /></svg>;
}

export function Compass(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></svg>;
}

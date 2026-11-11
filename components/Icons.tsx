type IconProps = { size?: number; className?: string };

function Icon({
  children,
  size = 24,
  className,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 20 6v5.6c0 4.7-3.2 7.8-8 9.4-4.8-1.6-8-4.7-8-9.4V6l8-3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.8 12.2 2 2 4.5-4.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect height="10" rx="2" stroke="currentColor" strokeWidth="1.8" width="14" x="5" y="10" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10M12 14v2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 6 2.5 6 2.5 7.5H4C4 16 6.5 16 6.5 10Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M10 20h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function MapIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m3.5 6.5 5-2.5 7 2.5 5-2.5v14l-5 2.5-7-2.5-5 2.5v-14Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.5 4v14M15.5 6.5v14" stroke="currentColor" strokeWidth="1.8" />
    </Icon>
  );
}

export function FingerprintIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.5 9.5a4.6 4.6 0 0 1 9 1.4c0 4.7-1.2 7.2-2.2 8.6M5.3 12.6c.2-1 .1-2 .4-3a6.6 6.6 0 0 1 12.8.4M9 12c.1-1.8 1.1-2.7 2.7-2.8 1.7-.1 2.8 1 2.8 2.7 0 3.7-.7 6-1.5 8.1M7.3 15.2c0 2.2-.6 3.3-1.1 4.3M11.7 12c0 3.7-.6 5.7-1.7 8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </Icon>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.5 4.5 0 0 1 12 7.4a4.5 4.5 0 0 1 8.8 1.4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function PlayStoreIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="m4.5 3.5 10.1 8.4L4.5 20.5V3.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m4.8 3.8 12.8 7.1c1 .6 1 1.6 0 2.2L4.8 20.2M14.6 11.9l3-1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12l3.2 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function HistoryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7v5h5M4.8 11.8A7.6 7.6 0 1 0 7 6.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M12 8v4l2.8 1.8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function VolumeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 10v4h3l4 3V7L8 10H5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M15 9.2a4 4 0 0 1 0 5.6M17.5 7a7 7 0 0 1 0 10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </Icon>
  );
}

export function WifiIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 9a12 12 0 0 1 16 0M7 12a7.6 7.6 0 0 1 10 0M10 15a3 3 0 0 1 4 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <circle cx="12" cy="18" fill="currentColor" r="1" />
    </Icon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
    </Icon>
  );
}

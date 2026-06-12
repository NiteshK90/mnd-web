interface ArrowRightProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function ArrowRight({ size = 16, color = "currentColor", strokeWidth = 1.5 }: ArrowRightProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

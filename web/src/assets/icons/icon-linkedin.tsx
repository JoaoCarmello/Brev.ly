type Props = {
  size?: number
  color?: string
}

export function IconLinkedin({
  size = 16,
  color = '#2C46B1',
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM0.5 8H4.5V24H0.5V8ZM8.5 8H12.3V10.1H12.35C12.9 9.1 14.2 8 16.3 8C20.3 8 21 10.6 21 14.1V24H17V15.3C17 13.3 17 10.9 14.5 10.9C12 10.9 11.6 13 11.6 15.2V24H7.6V8H8.5Z" />
    </svg>
  )
}
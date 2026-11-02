/**
 * Ti ikòn liy ki fèt alamen. Yo tout pataje menm gwosè ak menm epesè liy,
 * konsa yo parèt tankou yon sèl fanmi.
 */
function Icon({ children, className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconCart(props) {
  return (
    <Icon {...props}>
      <path d="M3 4h2l2.2 10.4a2 2 0 0 0 2 1.6h7.1a2 2 0 0 0 2-1.5L20 8H6" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </Icon>
  );
}

export function IconPhone(props) {
  return (
    <Icon {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </Icon>
  );
}

export function IconBuilding(props) {
  return (
    <Icon {...props}>
      <path d="M4 21V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15" />
      <path d="M15 11h3a2 2 0 0 1 2 2v8" />
      <path d="M8 8h3M8 12h3M8 16h3" />
      <path d="M3 21h18" />
    </Icon>
  );
}

export function IconGlobe(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
    </Icon>
  );
}

export function IconShield(props) {
  return (
    <Icon {...props}>
      <path d="M12 3l7.5 3v5.5c0 4.4-3.1 7.8-7.5 9-4.4-1.2-7.5-4.6-7.5-9V6z" />
      <path d="M9.3 12.2l1.9 1.9 3.6-3.8" />
    </Icon>
  );
}

export function IconSettings(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.6M12 18.9v2.6M4.2 7.3l2.2 1.3M17.6 15.4l2.2 1.3M4.2 16.7l2.2-1.3M17.6 8.6l2.2-1.3" />
    </Icon>
  );
}

export function IconGraduation(props) {
  return (
    <Icon {...props}>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5z" />
      <path d="M6.5 10.8V16c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6v-5.2" />
      <path d="M21.5 8.5v5" />
    </Icon>
  );
}

export function IconCard(props) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6.5 15h3" />
    </Icon>
  );
}

export function IconMail(props) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l9 6.2L21 7" />
    </Icon>
  );
}

export function IconCall(props) {
  return (
    <Icon {...props}>
      <path d="M5 3.5h3.2l1.4 4-2 1.4a12.5 12.5 0 0 0 6.5 6.5l1.4-2 4 1.4V18a2.5 2.5 0 0 1-2.7 2.5A16.8 16.8 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5z" />
    </Icon>
  );
}

export function IconGithub(props) {
  return (
    <Icon {...props}>
      <path d="M15.2 21v-3.2c0-1-.3-1.7-.8-2.1 2.6-.3 5.2-1.3 5.2-5.7a4.4 4.4 0 0 0-1.2-3.1 4.1 4.1 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C7.1 3.5 6.1 3.8 6.1 3.8a4.1 4.1 0 0 0-.1 3.1 4.4 4.4 0 0 0-1.2 3.1c0 4.4 2.6 5.4 5.2 5.7-.4.3-.7.9-.8 1.6-1.7.8-3.1-.4-3.9-1.5" />
      <path d="M9.2 17.8V21" />
    </Icon>
  );
}

export function IconArrowRight(props) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function IconExternal(props) {
  return (
    <Icon {...props}>
      <path d="M14 4h6v6" />
      <path d="M20 4l-8.5 8.5" />
      <path d="M19 14.5V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6.5A1.5 1.5 0 0 1 5 5h4.5" />
    </Icon>
  );
}

export function IconClose(props) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Icon>
  );
}

export function IconChevronLeft(props) {
  return (
    <Icon {...props}>
      <path d="M15 5l-7 7 7 7" />
    </Icon>
  );
}

export function IconChevronRight(props) {
  return (
    <Icon {...props}>
      <path d="M9 5l7 7-7 7" />
    </Icon>
  );
}

export function IconMenu(props) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function IconCheck(props) {
  return (
    <Icon {...props}>
      <path d="M4.5 12.5l5 5 10-11" />
    </Icon>
  );
}

export function IconImages(props) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="14" height="11" rx="2" />
      <path d="M7 19h12a2 2 0 0 0 2-2V9" />
      <path d="M3 13l3.2-3 3.3 3.2L12.5 10l4.5 4.5" />
    </Icon>
  );
}

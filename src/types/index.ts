export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  isHome?: boolean;
  children?: NavItem[];
}

export interface ServiceCard {
  src: string;
  href: string;
  label: string;
}

export interface NewsItem {
  icon: string;
  title: string;
  href: string;
  desc: string;
}

export interface EventItem {
  icon: string;
  title: string;
  href: string;
  desc: string;
}

export interface PartnerLogo {
  src: string;
  alt: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

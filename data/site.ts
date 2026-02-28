export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const siteConfig = {
  name: 'Haven Homes Interiors',
  description: 'Timeless, editorial interiors for modern living.',
  phone: '+1 (555) 212-0909',
  email: 'studio@havenhomesinteriors.com',
  address: 'Charlotte, North Carolina',
};

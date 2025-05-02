export interface SidebarOption {
  value: string;
  label: string;
  href: string;
}

export const sidebarOptions: SidebarOption[] = [
  {
    value: 'cognigy',
    label: 'Cognigy.AI',
    href: '/ai/about-cognigy-ai'
  },
  {
    value: 'voice',
    label: 'Voice Gateway',
    href: '/voice/intro'
  },
  {
    value: 'webchat',
    label: 'Webchat',
    href: '/webchat/cognigy-webchat'
  }
]; 
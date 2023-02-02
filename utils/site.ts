interface SiteConfig {
  name: string;
  description: string;
  logo: string;
  mainLinks: { name: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  name: 'SITE',
  description: 'SITE DESCRIPTION!',
  logo: '/retrobot.jpeg',
  mainLinks: [],
};

export const getPageTitle = (pages: string[]) => {
  return [...pages, siteConfig.name].join(' | ');
};

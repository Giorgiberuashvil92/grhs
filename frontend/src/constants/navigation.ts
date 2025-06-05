interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: 'კატეგორიები', href: '/categories' },
  { name: 'ВСЕ КОМПЛЕКСЫ', href: '/complexes' },
  { name: 'О НАС', href: '/about' },
  { name: 'БЛОГ', href: '/blog' },
  { name: 'КОНТАКТЫ', href: '/contacts' },
]; 
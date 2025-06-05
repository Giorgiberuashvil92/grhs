export const COLORS = {
  DARK_PURPLE: '#30334A',
  WHITE: '#FFFFFF',
  PURPLE: '#D4B5FC',
  GLASS_WHITE_EFFECT: '#FFFFFP40',
  GLASS_DARK_EFFECT: '#3D334AD',
  SECTION_BACKGROUND: '#FBFAFF',
  YELLOW: '#F3D57F',
  GREY: '#404404',
  MIDDLE_GREY: '#8D8D8D',
} as const;

// ფერების ტიპი TypeScript-ისთვის
export type ColorVariant = keyof typeof COLORS; 
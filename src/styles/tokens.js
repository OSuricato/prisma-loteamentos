// Design tokens — cores, tipografia e espaçamentos do site Prisma Loteamentos
// Atualize aqui para refletir em todo o projeto.

export const colors = {
  // Primárias — a definir com guidelines
  primary: '#2C6E49',
  primaryLight: '#4C956C',
  primaryDark: '#1B4332',

  // Secundárias
  secondary: '#F4A261',
  secondaryLight: '#FCDAB3',

  // Neutros
  white: '#FFFFFF',
  offWhite: '#F9F7F2',
  gray100: '#F0EDEA',
  gray300: '#C4BDB7',
  gray500: '#8B8178',
  gray700: '#4A4440',
  black: '#1A1614',

  // Feedback
  success: '#38A169',
  error: '#E53E3E',
};

export const fonts = {
  heading: "'Playfair Display', Georgia, serif",
  body: "'Inter', 'Helvetica Neue', Arial, sans-serif",
};

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
};

export const spacing = {
  section: '5rem',       // padding vertical entre seções
  container: '1200px',   // largura máxima do conteúdo
  gutter: '1.5rem',      // padding lateral em mobile
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12)',
  md: '0 4px 12px rgba(0,0,0,0.1)',
  lg: '0 8px 30px rgba(0,0,0,0.12)',
};

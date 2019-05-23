/**
 * Global styles for unicat
 */

declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}

declare type FontFamily = 'default' | 'heading';
declare type FontSize = 'large' | 'default' | 'small';
declare type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
declare type Resolution = 'phone' | 'tablet' | 'desktop' | 'hd';
declare type Size = 'xl' | 'l' | 'm' | 's' | 'xs';
declare type Variant = 'default' | 'light' | 'primary' | 'warning' | 'success';

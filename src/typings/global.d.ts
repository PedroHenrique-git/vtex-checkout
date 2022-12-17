declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.graphql';
declare module '*.gql';

interface Window extends Window {
  jquery: JQueryStatic;
  jQuery: JQueryStatic;
  $: JQueryStatic;
}

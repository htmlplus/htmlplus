export interface svelteOptions {
  dev?: boolean;
  dist: string;
  prefix: string;
}

export const svelte = (options: svelteOptions) => {

  const name = 'svelte';

  const next = (context) => {

  }

  return {
    name,
    next,
  }
}
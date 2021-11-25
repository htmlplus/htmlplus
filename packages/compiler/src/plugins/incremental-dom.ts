
export interface IncrementalDomOptions { 
  dev?: boolean;
  dist: string;
  prefix: string;
}

export const incrementalDom = (options: IncrementalDomOptions) => {
  
  const name = 'incremental-dom';

  const next = (context) => {

  }

  return {
      name,
      next,
  }
}
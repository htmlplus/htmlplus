import create from 'zustand';

interface UseStore {
  framework?: string;
  setFramework: (framework: string) => void;
}

export const useStore = create<UseStore>((set) => ({
  framework: 'react',
  setFramework: (framework: string) => {
    set({ framework });
  }
}));

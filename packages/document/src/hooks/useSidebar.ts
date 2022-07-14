import create from 'zustand';

import { SidebarItem } from '@app/containers';

interface UseSidebar {
  expands: SidebarItem[];
  setExpands: (expands: SidebarItem[]) => void;
}

export const useSidebar = create<UseSidebar>((set) => ({
  expands: [],
  setExpands: (expands) => set({ expands })
}));

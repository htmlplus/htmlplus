import create from 'zustand';

import { SidebarItem } from '@app/components';

interface UseSidebar {
  expands: SidebarItem[];
  setExpands: (expands: SidebarItem[]) => void;
}

export const useSidebar = create<UseSidebar>((set) => ({
  expands: [],
  setExpands: (expands) => set({ expands })
}));

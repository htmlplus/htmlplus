import { useContext } from 'react';
import { Store, StoreContext } from '@app/store';

export const useStore = (): Store => useContext(StoreContext);

import { create } from "zustand";

type State = {
  activeBadge: string | null;
};

type Actions = {
  setActiveBadge: (badge: string) => void;
};

const initialState: State = {
  activeBadge: null,
};

const useProductWidgetStore = create<State & Actions>((set) => ({
  ...initialState,
  setActiveBadge: (badge) => set({ activeBadge: badge }),
}));

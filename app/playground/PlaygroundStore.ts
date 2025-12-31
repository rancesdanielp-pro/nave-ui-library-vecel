// app/playground-store.ts
import { create } from 'zustand';

type PlaygroundState = {
  props: Record<string, any>;
  slots: Record<string, any>;
  setProps: (p: any) => void;
  setSlots: (s: any) => void;
};

export const usePlayground = create<PlaygroundState>((set) => ({
  props: {},
  slots: {},
  setProps: (props: any) => set({ props }),
  setSlots: (slots: any) => set({ slots }),
}));

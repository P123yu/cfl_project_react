import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      jwtData: {},
      roleName: {},
      mentorEmail: {},
      quarterGoal: false,
      isAuthenticated: false,
      setJwtData: (newJwtData) => set({ jwtData: newJwtData }),
      setRoleName: (newRoleName) => set({ roleName: newRoleName }),
      setMentorEmail: (newMentorEmail) => set({ mentorEmail: newMentorEmail }),
      setQuarterGoal: (newQuarterGoal) => set({ quarterGoal: true }),
      removeJwtData: () => set({ jwtData: {} }),
      removeRoleName: () => set({ roleName: {} }),
      removeMentorEmail: () => set({ mentorEmail: {} }),
      setIsAuthenticated: (newIsAuthenticated) =>
        set({ isAuthenticated: newIsAuthenticated }),
    }),
    {
      name: "Response",
      Storage: () => localStorage,
    }
  )
);

export default useStore;

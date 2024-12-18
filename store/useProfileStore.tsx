import { create } from "zustand"

// Profile state interface
interface ProfileState {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
}

// Create the store with Zustand
export const useProfileStore = create<ProfileState>((set) => ({
  user:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null,
  loading: false,

  // Action to set the user
  setUser: (user) => {
    set({ user })
    localStorage.setItem("user", JSON.stringify(user))
  },

  // Action to set loading status
  setLoading: (loading) => set({ loading }),
}))

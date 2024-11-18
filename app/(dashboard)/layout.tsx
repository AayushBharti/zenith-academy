import { useAuthStore } from "@/store/useAuthStore"
import { useProfileStore } from "@/store/useProfileStore"
import { Loader2 } from "lucide-react"

import PrivateRoute from "@/components/Auth/PrivateRoute"
import Sidebar from "@/components/Dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const { loading: authLoading } = useAuthStore.getState()
  const { loading: profileLoading } = useProfileStore.getState()

  if (authLoading || profileLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <PrivateRoute>
      <div className="flex max-w-[1500px] bg-background relative h-full max-w-8xl mx-auto antialiased">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8">{children}</main>
      </div>
    </PrivateRoute>
  )
}

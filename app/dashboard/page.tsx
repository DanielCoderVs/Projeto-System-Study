import { createClient } from "@/lib/supabase-server";
import DashboardClient from "@/components/dashboard-client";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const fallbackName = user?.email?.split("@")[0] ?? "Estudante";
  const name = typeof user?.user_metadata?.name === "string" ? user.user_metadata.name : fallbackName;

  return <DashboardClient name={name} email={user?.email ?? ""} />;
}

import { AppShell } from "@/components/layout/app-shell";

export default function StudentAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}

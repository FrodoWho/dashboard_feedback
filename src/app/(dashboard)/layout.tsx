import Link from "next/link";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Link href="/">Dashboard</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="container my-6">{children}</div>
    </>
  );
}

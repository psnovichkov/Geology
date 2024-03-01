export default function NewEntryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-16">
      {children}
    </div>
  );
}

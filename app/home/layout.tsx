import TerminalSidebar from '../components/TerminalSidebar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <TerminalSidebar />
      <main className="flex-1 lg:ml-80">
        {children}
      </main>
    </div>
  );
}
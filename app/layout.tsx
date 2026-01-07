import type { Metadata } from 'next';
import './styles/globals.css';
import NavigationPage from './components/[slug]/NavigationPage';
import './utils/tokens';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Nave UI Library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="">
            <NavigationPage />
          </aside>

          {/* Page content */}
          <main className="flex-1 px-8 py-6">
            <div className="container">
            {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}



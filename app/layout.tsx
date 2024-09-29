import './globals.css';  // Add this line
import CometChatInitializer from './components/CometChatInitializer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CometChatInitializer />
        {children}
      </body>
    </html>
  );
}

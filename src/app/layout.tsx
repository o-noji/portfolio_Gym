import { MantineProvider } from "@mantine/core";
import "./globals.scss";
import "@mantine/core/styles.css";

export const metadata = {
  title: "OKD GYM",
  description: "OKD GYMへようこそ！",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

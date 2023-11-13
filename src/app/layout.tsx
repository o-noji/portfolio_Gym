import "./globals.scss";

export const metadata = {
  title: "OKD GYM",
  description: "OKD GYMへようこそ！",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

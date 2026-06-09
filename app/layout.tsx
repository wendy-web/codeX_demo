import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛孩子宠物洗护",
  description: "温和洗护、独立烘干、可视化护理的宠物洗护预约页面。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

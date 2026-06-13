import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'Official YouTube Channel | Creator Hub',
  description: 'Explore the official website for Creator Hub – featuring videos, behind-the-scenes, FAQs, and more. Join our community and never miss an update!',
  keywords: ["YouTube, Creator, Videos, Channel, Entertainment, Vlogs, Tutorials, Gaming, Content Creation, Online Learning"],
  openGraph: {
    "title": "Official YouTube Channel | Creator Hub",
    "description": "Explore the official website for Creator Hub – featuring videos, behind-the-scenes, FAQs, and more. Join our community and never miss an update!",
    "url": "https://www.yourchannelwebsite.com",
    "siteName": "Creator Hub",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/empty-gaming-studio-with-rgb-led-lights-powerful-personal-computer-streaming-online-competition-display-with-stream-chat-prepared-virtual-tournament-living-room-with-nobody_482257-12597.jpg",
        "alt": "Dynamic video editing interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Official YouTube Channel | Creator Hub",
    "description": "Explore the official website for Creator Hub – featuring videos, behind-the-scenes, FAQs, and more. Join our community and never miss an update!",
    "images": [
      "http://img.b2bpic.net/free-photo/empty-gaming-studio-with-rgb-led-lights-powerful-personal-computer-streaming-online-competition-display-with-stream-chat-prepared-virtual-tournament-living-room-with-nobody_482257-12597.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

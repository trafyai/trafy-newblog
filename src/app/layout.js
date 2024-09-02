import { Inter } from "next/font/google";
import '@/styles/globals.css';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { AuthContextProvider } from "@/context/AuthContext";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "trafy blog | Latest on AI, Design, Marketing and Sales",
  description:
    "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  metadataBase: new URL("https://blog.trafyai.com/"),
  openGraph: {
    title: "trafy - Your Personalised AI mentor",
    description:
      "Learn UI/UX designing, artificial intelligence, and digital marketing with our interactive courses and accelerate your career with expert guidance",
  }
 

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
            <Header/>
            {children}
            <Footer/>
        </AuthContextProvider>
        <GoogleAnalytics gaId=" G-329K7NDLKZ" />

        </body>
      
    </html>
  );
}

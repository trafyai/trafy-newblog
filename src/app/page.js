import Image from "next/image";
import BlogLanding from "@/components/blog-page/blog-landing/BlogLanding";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
  return (
   <div>
            <GoogleAnalytics gaId=" G-329K7NDLKZ" />

      <BlogLanding/>
   </div>
   
  );
}

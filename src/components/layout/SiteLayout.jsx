import ClinicSchema from "../common/ClinicSchema";

import QuoteScroller from "./QuoteScroller";
import Header from "./Header";
import Footer from "./Footer";
import MobileCTA from "./MobileCTA";

export default function SiteLayout({ children }) {
  return (
    <>
      <ClinicSchema />

      <QuoteScroller />

      <Header />

      {children}

      <Footer />

      <MobileCTA />
    </>
  );
}
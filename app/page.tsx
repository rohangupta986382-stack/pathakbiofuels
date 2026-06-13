import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Products from "./component/Products"; 
import Leadership from "./component/Leadership";
import ContactForm from "./component/ContactForm";
import PaymentPortel from "./component/PaymentPortel";
import AiAssistant from "./component/AiAssistant";
import Footer from "./component/Footer"; 
import WhyChooseUs from "./component/WhyChooseUs";
import SupplyProcess from "./component/SupplyProcess";
import Industries from "./component/Indusries";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Products />
        <WhyChooseUs />
        <SupplyProcess />
        <Industries />
        <Leadership />
        <ContactForm />
        <PaymentPortel />
        <AiAssistant />
        <Footer />
      </main>
    </>
  );
}


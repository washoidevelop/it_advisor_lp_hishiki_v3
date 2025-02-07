import ContactForm from "../components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;

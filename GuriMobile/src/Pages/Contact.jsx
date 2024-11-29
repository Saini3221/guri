import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="h-screen flex flex-col justify-between bg-[]">
      <Navbar />
      <div className="flex items-center">
        <img
          className="w-[30%] h-[100%]"
          src="https://thumbs.dreamstime.com/b/baby-owl-face-bird-sticker-isolated-tansparent-background-png-logo-generative-ai-277304535.jpg"
          alt=""
        />
        
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

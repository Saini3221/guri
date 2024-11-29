import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="h-screen flex flex-col justify-between text-white">
      <Navbar />
      <div className="m-10">
        <h1 className="flex justify-center items-center font-jaro text-6xl max-xl:text-4xl ">
          ABOUT US
        </h1>
        <div className="mt-[3%]">
          <div className=" flex items-center justify-center gap-4 max-lg:flex-col max-xl:w-full">
            <img
              src="https://images.unsplash.com/photo-1611433965582-de98df4da7ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D"
              className="max-xl:w-[90%]"
              alt=""
            />
            <p className="w-1/3 max-xl:w-[90%] font-poetsen ">
              Guri Mobile Garage: Established in 2022, Guri Mobile Garage is a
              renowned mobile repairing shop offering comprehensive services.
              Our skilled technicians handle all types of mobile repairs,
              including hardware and software issues. We buy and sell both new
              and pre-owned mobiles, ensuring fair prices and quality products.
              Additionally, our shop offers a wide range of mobile accessories
              such as cases, chargers, and earphones. With a focus on customer
              satisfaction, experienced technicians, and high-quality products,
              Guri Mobile Garage is your one-stop solution for all
              mobile-related needs. Visit us for reliable repairs, great deals
              on mobiles, and top-notch accessories{" "}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;

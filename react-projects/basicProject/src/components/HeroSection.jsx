import React from "react";
import image from "../assets/instructor.jpg";

const HeroSection = () => {
  return (
    <section className=" w-full text-white p-4">
      <div className="w-[70%] mx-auto border mt-2 p-4">
        <div className="flex flex-row justify-around gap-4">
          <div className="h-80 w-40 rounded-full flex-shrink-0 ">
            <img src={image} alt="Instructor image" className="" />
          </div>

          {/* description */}
          <div className=" p-4">
            <h3 className="text-2xl text-center py-5 ">Instructors Name</h3>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nam laborum adipisci impedit natus ex ut facere alias!
              Iste qui dolor inventore esse delectus atque vel eaque repudiandae
              iusto libero eligendi quibusdam accusantium obcaecati, nesciunt
              modi alias deleniti natus ea quis ad nam! Autem id eos
              perferendis, iusto architecto officiis.
            </p>
            <div className="">
              <button className="bg-blue-600 m-4 p-4 text-xl rounded-2xl">
                Click me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

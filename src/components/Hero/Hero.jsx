import BGImage from "../../assets/bg-slate.png";

const bgImage = {
  backgroundImage: `url(${BGImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage} className="">
      <section className="min-h-[750px] w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content  */}
            <div className="text-neutral mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4 ">
                  <h4 className="text-2xl">Black Lifestyle Lovers,</h4>
                  <p className="text-sm opacity-55 leading-loose m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem odit ipsa sit cupiditate eaque dolorum
                    incidunt nostrum harum provident possimus! Harum similique
                    pariatur animi debitis error cumque deleniti. Quo, quaerat?
                  </p>
                </div>
                <div className="absolute -top-2 -left-10 w-[250px] h-[200px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* image sec  */}
            <div></div>
            {/* third sec  */}
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;

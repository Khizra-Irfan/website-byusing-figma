export default function Home() {
  return (
    <div className="bg-[#252B42] min-h-screen flex items-center justify-center">
      <div className="w-[1046px] h-auto p-20 flex flex-col gap-6">
        <header className="text-left">
          <h5 className="text-[#23A6F0] font-montserrat text-lg font-bold tracking-wide mb-4 flex items-center justify-center">
            Welcome
          </h5>
          <h1 className="text-white font-montserrat text-5xl font-bold leading-tight tracking-wide text-center mb-2">
            Selling on the
            <br /> internet like a pro
          </h1>
        </header>

        <div className="flex flex-col items-center">
          <h4 className="text-white font-montserrat text-2xl leading-relaxed tracking-wide font-normal text-center mt-1 mb-6">
            We know how large objects will act, but things on a
            <br /> small scale just do not act that way.
          </h4>

          {/* Flex container for buttons with hover and active effects */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="w-[193px] h-[52px] bg-[#23A6F0] text-white font-montserrat font-bold text-lg rounded-md transition-all duration-200 hover:bg-[#1a8bc1] active:scale-95">
              Get Quote Now
            </button>
            <button className="w-[162px] h-[52px] bg-transparent border border-[#23A6F0] text-[#23A6F0] font-montserrat font-bold text-lg rounded-md transition-all duration-200 hover:bg-[#23A6F0] hover:text-white active:scale-95">
              Learn More
            </button>
          </div>

          {/* Flex container for boxes with hover and active effects */}
          <div className="flex gap-8 pt-20">
            {/* Box 1 */}
            <div className="w-[328px] h-[292px] p-[35px] bg-white shadow-lg rounded-md flex flex-col items-start transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
              <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-[10px] mb-4"></div>
              <h3 className="font-montserrat text-lg font-bold text-left mb-2">
                Training Courses
              </h3>
              <div className="h-[2px] w-[50px] bg-[#E74040] mb-2"></div>
              <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                The gradual accumulation of 
                <br />information about atomic and
                <br /> small-scale behaviour...
              </p>
            </div>

            {/* Box 2 */}
            <div className="w-[328px] h-[292px] p-[35px] bg-white shadow-lg rounded-md flex flex-col items-start transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
              <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-[10px] mb-4"></div>
              <h3 className="font-montserrat text-lg font-bold text-left mb-2">
                2,769 Online Courses
              </h3>
              <div className="h-[2px] w-[50px] bg-[#E74040] mb-2"></div>
              <p className="font-montserrat text-sm text-gray-600 leading-relaxed">
                The gradual accumulation of 
                <br />information about atomic and
                <br /> small-scale behaviour...
              </p>
            </div>

            {/* Box 3 */}
            <div className="w-[328px] h-[292px] p-[35px] bg-[#23A6F0] shadow-lg rounded-md flex flex-col items-start transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
              <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded-[10px] mb-4"></div>
              <h3 className="font-montserrat text-lg font-bold text-left mb-2 text-white">
                Consulting Services
              </h3>
              <div className="h-[2px] w-[50px] bg-[#FFFFFF] mb-2"></div>
              <p className="font-montserrat text-sm text-gray-100 leading-relaxed">
                The gradual accumulation of 
                <br />information about atomic and
                <br /> small-scale behaviour...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

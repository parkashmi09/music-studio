import { Toaster } from "react-hot-toast";

export default function AuthLayout({ title, leftImage, children }) {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.png')",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center rounded-[20px] bg-gradient-to-b from-[rgba(88,130,193,0.4)] to-[rgba(88,130,193,0.1)] min-h-[450px] md:min-h-[658px] relative py-6 md:py-8 px-4 md:px-6">
          {/* Left Section with Image */}
          <div className="flex justify-center items-center py-2 md:py-0 order-2 md:order-1">
            <div className="relative max-w-full">
              <img
                src={leftImage}
                alt="Login"
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[436px]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center w-full px-4">
                {title}
              </div>
            </div>
          </div>

          {/* Right Section with Form */}
          <div className="px-2 sm:px-4 md:px-6 order-1 md:order-2">
            {children}
          </div>
        </div>

        {/* Purple dots at bottom */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-purple-500"></div>
          ))}
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
}
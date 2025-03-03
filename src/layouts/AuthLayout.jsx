import { Toaster } from "react-hot-toast";

export default function AuthLayout({ title,leftImage, children }) {
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
    <div className="relative z-10 min-h-screen flex items-center justify-center px-2 py-4">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center rounded-[20px] bg-gradient-to-b from-[rgba(88,130,193,0.4)] to-[rgba(88,130,193,0.1)]  min-h-[658px] relative py-8">
        {/* Left Section with Image */}
        <div className="flex justify-center items-center py-0">
          <div className="relative">
            <img
              src={leftImage}
              alt="Login"
              className="w-full max-w-[436px]"
            />
            <div className="absolute text-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              {title}
            </div>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="px-0">
          {children}
        </div>

      
      </div>
        {/* Purple dots at bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-purple-500"></div>
          ))}
        </div>
    </div>

    <Toaster position="top-center" />
  </div>
  );
}


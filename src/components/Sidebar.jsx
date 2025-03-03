import { Link, useLocation, useNavigate } from "react-router-dom";
import Studio from "../assets/images/studio.png";
import StudioLogo from "../assets/images/StLogo.png";
import Divider from "../assets/images/divider.png";
import { useEffect } from "react";

const menuItems = [
  {
    icon: "/src/assets/images/sidebar/home.png",
    text: "Dashboard",
    path: "/dashboard/home",
  },
  {
    icon: "/src/assets/images/sidebar/person.png",
    text: "Artist Management",
    path: "/dashboard/artist-management",
  },
  {
    icon: "/src/assets/images/sidebar/music.png",
    text: "Content Moderation",
    path: "/dashboard/content-moderation",
  },
  {
    icon: "/src/assets/images/sidebar/wallet.png",
    text: "Financial Management",
    path: "/dashboard/financial-management",
  },
  {
    icon: "/src/assets/images/sidebar/chart.png",
    text: "Platform Analytics",
    path: "/dashboard/platform-analytics",
  },
  {
    icon: "/src/assets/images/sidebar/support.png",
    text: "Help & Notification",
    path: "/dashboard/help-notification",
  },
  {
    icon: "/src/assets/images/sidebar/reports.png",
    text: "Content Insights & Reports",
    path: "/dashboard/content-insights",
  },
  {
    icon: "/src/assets/images/sidebar/settings.png",
    text: "Integration & Configuration",
    path: "/dashboard/integration-configuration",
  },
  {
    icon: "/src/assets/images/sidebar/subscription.png",
    text: "Subscription Management",
    path: "/dashboard/subscription-management",
  },
  {
    icon: "/src/assets/images/sidebar/security.png",
    text: "Security & Privacy",
    path: "/dashboard/security-privacy",
  },
];

const SidebarItem = ({ icon, text, path }) => {
  const location = useLocation();
  
  // Check if current path starts with the menu item path
  const isActive = location.pathname === path || 
    (path.includes('artist-management') && location.pathname.includes('artist-management')) ||
    (path !== '/dashboard/home' && location.pathname.startsWith(path));

  // Using a container div with a gradient border approach
  if (isActive) {
    return (
      <Link to={path} className="block">
        <div className="mx-3 p-[1px] rounded-[15px] bg-gradient-to-r from-[#FF0844] to-[#0075FF]">
          <div className="flex items-center gap-3 px-4 py-3 rounded-[14px] bg-[#1A1F37]">
            <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#0075FF]">
              <img
                src={icon}
                alt={text}
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-[14px] font-medium">{text}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={path} className="block">
      <div className="flex items-center gap-3 px-4 py-3 mx-3 rounded-[15px] hover:bg-blue-900/30 transition-all">
        <div className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#1A1F37]">
          <img src={icon} alt={text} className="w-5 h-5 opacity-70" />
        </div>
        <span className="text-white text-[14px] font-medium">{text}</span>
      </div>
    </Link>
  );
};

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Effect to handle initial route matching
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Find the matching menu item based on the current path
    const matchingItem = menuItems.find(item => {
      if (currentPath === item.path) return true;
      if (currentPath.includes('artist-management') && item.path.includes('artist-management')) return true;
      if (currentPath.startsWith(item.path) && item.path !== '/dashboard/home') return true;
      return false;
    });

    // If no matching item is found and we're on a sub-route, find the parent route
    if (!matchingItem && currentPath.startsWith('/dashboard/')) {
      const parentPath = currentPath.split('/').slice(0, 3).join('/');
      const parentItem = menuItems.find(item => item.path === parentPath);
      if (parentItem) {
        // Optional: You can handle parent route activation here if needed
        console.log('Parent route found:', parentItem.path);
      }
    }
  }, [location.pathname]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside
      style={{
        backgroundImage: "url('/images/sidebarBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`fixed p-2 top-0 left-0 h-screen overflow-hidden
        w-[280px] lg:w-[323px] flex flex-col bg-gradient-to-r 
        from-[rgba(6,11,38,0.94)] to-[rgba(26,31,55,0)] text-white shadow-xl z-30
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Logo section */}
      <div className="py-4 px-8 flex-shrink-0">
        <div className="flex items-center">
          <img
            src={StudioLogo}
            className="h-12 w-[183px] object-contain"
            alt="Studio Logo"
          />
          <img src={Studio} className="w-full object-contain" alt="Studio" />
        </div>
      </div>

      {/* <div className="border-b border-gray-800  mx-4 flex-shrink-0"></div> */}
      <img src={Divider} className="px-2" alt="divider"/>

      {/* Scrollable menu items */}
      <div className="mt-4 flex-1 overflow-y-auto py-2 space-y-4 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            path={item.path}
          />
        ))}
      </div>

      {/* Logout section */}
      <div onClick={handleLogout} className="p-4 flex-shrink-0 border-t border-gray-800/50">
        <SidebarItem
          icon="/src/assets/images/sidebar/logout.png"
          text="Log Out"
          path="/logout"
        />
      </div>
    </aside>
  );
};

export default Sidebar;

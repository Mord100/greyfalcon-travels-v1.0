import { useState } from 'react';
import { 
  HiLocationMarker, 
  HiGlobeAlt, 
  HiCalendar, 
  HiPhone,
  HiMenuAlt3,
  HiX
} from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'About Us ', icon: HiLocationMarker, href: '#' },
    { name: 'Services', icon: HiGlobeAlt, href: '#' },
    { name: 'Destinations', icon: HiCalendar, href: '#' },
    { name: 'Contact Us', icon: HiPhone, href: '#' }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          {/* Logo */}
          <div className="mr-6 flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900">
              <HiGlobeAlt className="h-5 w-5 text-white" />
            </div>
            <span className="hidden font-bold sm:inline-block text-xl text-slate-900">
              Grey Falcon Travels 
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6 text-sm font-medium ml-6">
            <a
              href="#"
              className="transition-colors hover:text-slate-900 text-slate-900"
            >
              Home
            </a>
            {menuItems.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-slate-900 text-slate-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <a
                href="#"
                className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 py-2 ml-6"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-100 hover:text-slate-900 h-10 w-10 md:hidden ml-2"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            {isMenuOpen ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenuAlt3 className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Side Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900">
                <HiGlobeAlt className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">
                Grey Falcon Travels 
              </span>
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 hover:bg-slate-100 h-10 w-10"
            >
              <HiX className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-1">
              <a
                href="#"
                className="flex items-center px-3 py-3 text-sm font-medium text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              >
                Home
              </a>
              {menuItems.map((item, index) => {
                // const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-3 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    style={{
                      animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {/* <IconComponent className="h-5 w-5" /> */}
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Menu Footer */}
          <div className="p-6 border-t">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 bg-slate-900 text-white hover:bg-slate-800 h-10 px-4 py-2 w-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
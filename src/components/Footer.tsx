import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 bg-white/40 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 w-full md:w-1/3 justify-center md:justify-start">
            <img
              src="/lovable-uploads/00f05e3a-06eb-4678-b295-743dbd46914f.png"
              alt="Zest Logo"
              className="w-8 h-auto"
            />
            <span className="font-display text-xl font-bold">
              <span className="text-lime-600">Zest</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-4 md:mt-0 w-full md:w-1/3">
            <Link
              to="/changelog"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Changelog
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Privacy
            </Link>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <p className="text-gray-500 text-sm mt-4 md:mt-0 text-center md:text-left">
              © {new Date().getFullYear()} Zest. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

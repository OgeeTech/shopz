import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "0, 0" means Top, Left coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the path changes

  return null;
};

export default ScrollToTop;

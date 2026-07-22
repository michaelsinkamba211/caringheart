// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // slight delay lets the target page's content mount first
            const timeout = setTimeout(() => {
                const el = document.getElementById(hash.replace("#", ""));
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    window.scrollTo({ top: 0 });
                }
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            window.scrollTo({ top: 0 });
        }
    }, [hash, pathname]);

    return null;
};

export default ScrollToHash;
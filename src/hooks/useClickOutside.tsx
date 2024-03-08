import { useEffect } from "react";

interface Parameters {
  divToHide: any;
  buttonToClick: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const useClickOutside = ({ divToHide, buttonToClick, setOpen }: Parameters) => {
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target !== undefined) {
        if (
          divToHide.current &&
          !divToHide.current.contains(e.target) &&
          e.target.nodeName !== "HTML" &&
          !buttonToClick.current.contains(e.target)
        ) {
          setOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export default useClickOutside;

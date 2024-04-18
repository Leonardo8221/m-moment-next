import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "./dropdown.module.css";
import { useEffect, useRef } from "react";
interface IDropDwon {
  options: any[];
  setIsOpen: Function;
  selectedValue: {};
  isOpen: boolean;
  handleItemClick: Function;
}

const DropDwon = ({
  options,
  setIsOpen,
  isOpen,
  selectedValue,
  handleItemClick,
}: IDropDwon) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (isOpen && !dropdownRef.current?.contains(event.target))
        setIsOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.dropdownButton} ${
          isOpen ? styles.dropdownIsOpen : ""
        }`}
      >
        <div className="flex items-center gap-[8px]">
          <div className="w-[14px] flex items-center justify-center">
            {options.find((opption) => opption.label == selectedValue)?.icon}
          </div>
          <>{selectedValue}</>
        </div>
        <span className="flex items-center">
          {isOpen ? (
            <IoIosArrowUp fontSize="small" />
          ) : (
            <IoIosArrowDown fontSize="small" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu} ref={dropdownRef}>
          {options.map((option) => (
            <div
              className={styles.dropdownItem}
              key={option.value}
              onClick={() => handleItemClick(option)}
            >
              <div className="w-[14px] flex items-center justify-center">{option.icon}</div>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDwon;

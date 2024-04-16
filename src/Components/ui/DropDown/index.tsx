import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styles from "./dropdown.module.css";
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
  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className={styles.dropdownButton}>
        <div className="flex items-center gap-[8px]">
          {options.find((opption) => opption.label == selectedValue)?.icon}
          {selectedValue}
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
        <div className={styles.dropdownMenu} id="selectList">
          {options.map((option) => (
            <div
              className={styles.dropdownItem}
              key={option.value}
              onClick={() => handleItemClick(option)}
            >
              {option.icon}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDwon;

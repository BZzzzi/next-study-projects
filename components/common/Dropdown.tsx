"use client";

import { useEffect, useState, useRef } from "react";
import styles from "@/components/common/Dropdown.module.css";
import { Theme } from "@/lib/ThemeContext";

interface Option {
  value: Theme;
  label: string;
}

interface DropdownProps {
  className?: string;
  name: string;
  value: Theme;
  options: Option[];
  onChange: (name: string, value: Theme) => void;
}

export default function Dropdown({
  className = "",
  name,
  value,
  options,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);

  function handleInputClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleBlur() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const isInside = inputRef.current?.contains(target);
      if (!isInside) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const classNames = `${styles.input} ${
    isOpen ? styles.opened : ""
  } ${className}`;
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      className={classNames}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {selectedOption?.label || ""}
      <span className={styles.arrow}>▴</span>
      <div className={styles.options}>
        {options.map((option) => {
          const selected = value === option.value;
          const className = `${styles.option} ${
            selected ? styles.selected : ""
          }`;
          return (
            <div
              className={className}
              key={option.value}
              onClick={() => onChange(name, option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

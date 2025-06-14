import React, { Dispatch, SetStateAction } from "react";

interface Props {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  className?: string;
}

const PercentageInput: React.FC<Props> = ({
  value,
  onChange,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 100) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      step="0.01"
      min="0"
      max="100"
      className={`${className} w-full p-2 border rounded outline-none`}
      placeholder="Enter percentage (0-100)"
    />
  );
};

export default PercentageInput;

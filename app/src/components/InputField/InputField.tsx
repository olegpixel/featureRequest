import React from "react";

type InputFieldProps = {
  value: string | number;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  type?: string;
  maxlength?: number;
};

const InputField = ({
  value,
  onChange,
  placeholder,
  type = "text",
  maxlength = 255,
}: InputFieldProps) => {
  return (
    <input
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
        onChange(e.target.value)
      }
      type={type}
      maxLength={maxlength}
    />
  );
};

export default InputField;

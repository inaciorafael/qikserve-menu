import React, { useRef, useState } from "react";

import Icon from "../../components/Icon";

type SearchInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = (props: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = event.currentTarget.value;
    }
  };

  return (
    <div
      className={`bg-white border-[0.1rem] rounded-xl border-gray-500 px-3 transition-all py-2 gap-4 flex flex-row items-center ${isFocused ? "ring-2 ring-gray-500" : ""}`}
    >
      <Icon.Search className="text-2xl text-gray-500" />
      <input
        ref={inputRef}
        className="text-md md:text-xl w-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        onChange={handleChangeText}
        {...props}
      />
    </div>
  );
};

export default SearchInput;

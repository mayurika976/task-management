import React, { useState } from 'react';

const NumberInputs = () => {
  const [values, setValues] = useState(Array(7).fill(""));

  const handleInputChange = (index, event) => {
    const updatedValues = [...values];
    updatedValues[index] = event.target.value;
    setValues(updatedValues);
                };
  

  return (
    <div className="flex justify-center px-4 py-3">
      <fieldset className="relative flex gap-4">
        {values.map((value, index) => (
          <input
            key={index}
            className="flex h-14 w-12 text-center appearance-textfield focus:outline-0 focus:ring-0 border-0 border-b border-[#E9DFCE] text-base font-normal leading-normal"
            type="number"
            maxLength="1"
            max="9"
            min="0"
            value={value}
            onChange={(event) => handleInputChange(index, event)}
            onKeyUp={(event) => {
              if (/^\d$/.test(event.key) && value.length > 1) {
                const nextSibling = event.target.nextSibling;
                if (nextSibling) nextSibling.focus();
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Backspace" && value === "") {
                const prevSibling = event.target.previousSibling;
                if (prevSibling) prevSibling.focus();
              } else if (event.key === "ArrowLeft") {
                const prevSibling = event.target.previousSibling;
                if (prevSibling) prevSibling.focus();
                            } else if (event.key === "ArrowRight") {
                              const nextSibling = event.target.nextSibling;
                              if (nextSibling) nextSibling.focus();
                            }
                          }}
                        />
                      ))}
                    </fieldset>
                  </div>
                );
              };

              export default NumberInputs;

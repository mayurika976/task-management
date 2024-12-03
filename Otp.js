import React from "react";

const OTPInput = ({ length = 4 }) => {
  const handleKeyUp = (e, idx, inputs) => {
    const key = e.key;
    if (/^\d$/.test(key)) {
      if (e.target.value.length > 1) {
        const nextValue = e.target.value.slice(1);
        e.target.value = e.target.value[0];
        if (inputs[idx + 1]) inputs[idx + 1].value = nextValue;
      }
      inputs[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx, inputs) => {
    if (e.key === "Backspace" && !e.target.value) {
      inputs[idx - 1]?.focus();
    } else if (e.key === "ArrowLeft") {
      inputs[idx - 1]?.focus();
    } else if (e.key === "ArrowRight") {
      inputs[idx + 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="number"
          min="0"
          max="9"
          className="h-14 w-12 text-center border-b border-[#E9DFCE] focus:outline-none"
          onKeyUp={(e) => handleKeyUp(e, idx, e.currentTarget.parentNode.children)}
          onKeyDown={(e) => handleKeyDown(e, idx, e.currentTarget.parentNode.children)}
        />
      ))}
    </div>
  );
};

export default OTPInput;

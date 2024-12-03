import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
      {/* Logo and Title */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-[#1C160C]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect width="48" height="48" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Task Manager</h2>
        </div>
        {/* Navigation Links */}
        <nav className="flex items-center gap-9">
          <a className="text-[#1C160C] text-sm font-medium leading-normal" href="/dashboard">Dashboard</a>
          <button className="text-[#1C160C] text-sm font-medium leading-normal">Analytics</button>
          <button className="text-[#1C160C] text-sm font-medium leading-normal">Tasks</button>
          <button className="text-[#1C160C] text-sm font-medium leading-normal">Reports</button>
        </nav>
      </div>

      {/* Right Side Actions */}
      <div className="flex flex-1 justify-end gap-8">
        {/* Search Bar */}
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-[#1C160C]" data-icon="Gear" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"
                ></path>
              </svg>
            </div>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-[#1C160C]" data-icon="Bell" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        {/* Profile Avatar */}
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/2ddaa375-e5cc-405a-a176-dfe1b2df97df.png")` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;

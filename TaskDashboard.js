import React from 'react';

const TaskDashboard = () => {
  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-80">
        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/d229262e-0c8d-4b9a-904c-31b9d2315727.png")' }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-[#1C160C] text-base font-medium leading-normal">Task Manager</h1>
                <p className="text-[#A18249] text-sm font-normal leading-normal">Manage your tasks efficiently</p>
              </div>
            </div>

            {/* Task Category Menu */}
            <div className="flex flex-col gap-2">
              {['Dashboard', 'Analytics', 'Tasks', 'Reports', 'Settings', 'Help'].map((item, index) => (
                <div key={index} className={`flex items-center gap-3 px-3 py-2 ${item === 'Tasks' ? 'rounded-full bg-[#F4EFE6]' : ''}`}>
                  <div className="text-[#1C160C]" data-icon="Gauge" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#1C160C] text-sm font-medium leading-normal">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#1C160C] text-4xl font-black leading-tight tracking-[-0.033em]">Task Management Dashboard</p>
            <p className="text-[#A18249] text-base font-normal leading-normal">Organize and track your tasks effectively</p>
          </div>
        </div>

        {/* Task Search */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#A18249] flex border-none bg-[#F4EFE6] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search tasks by title"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border-none bg-[#F4EFE6] focus:border-none h-full placeholder:text-[#A18249] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value=""
              />
            </div>
          </label>
        </div>

        {/* Task Filter */}
        <div className="flex px-4 py-3">
          <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
            {['All Tasks', 'Completed', 'Pending', 'In Progress'].map((status, index) => (
              <label key={index} className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2">
                <span className="truncate">{status}</span>
                <input type="radio" name="task-filter" className="invisible w-0" value={status} checked={status === 'All Tasks'} />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default TaskDashboard;

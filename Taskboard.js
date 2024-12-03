import React from 'react';

const TaskDashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-6">
      {/* Task Progress */}
      <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
        <p className="text-[#1C160C] text-base font-medium leading-normal">Task Progress</p>
        <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight truncate">85%</p>
        <div className="flex gap-1">
          <p className="text-[#A18249] text-base font-normal leading-normal">This Week</p>
          <p className="text-[#019863] text-base font-medium leading-normal">+5%</p>
        </div>
        <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">
              <div className="border-[#A18249] bg-[#F4EFE6] border-t-2 w-full" style={{ height: `${[50, 30, 80, 40, 100, 70, 40][index]}%` }}></div>
              <p>{day}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Trends */}
      <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
        <p className="text-[#1C160C] text-base font-medium leading-normal">Task Trends</p>
        <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight truncate">42 tasks</p>
        <div className="flex gap-1">
          <p className="text-[#A18249] text-base font-normal leading-normal">This Month</p>
          <p className="text-[#019863] text-base font-medium leading-normal">+12%</p>
        </div>
        <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
          <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
              fill="url(#paint0_linear_1131_5935)"
            ></path>
            <path
              d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
              stroke="#A18249"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
            <defs>
              <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F4EFE6"></stop>
                <stop offset="1" stopColor="#F4EFE6" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-around">
            <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 1</p>
            <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 2</p>
            <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 3</p>
            <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 4</p>
          </div>
        </div>
      </div>

      {/* Task Distribution */}
      <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
        <p className="text-[#1C160C] text-base font-medium leading-normal">Task Distribution</p>
        <p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight truncate">High Priority</p>
        <div className="flex gap-1">
          <p className="text-[#A18249] text-base font-normal leading-normal">Overall</p>
          <p className="text-[#C12929] text-base font-medium leading-normal">-3%</p>
        </div>
        <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
          <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">High</p>
          <div className="h-full flex-1">
            <div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{ width: '100%' }}></div>
          </div>
          <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Medium</p>
          <div className="h-full flex-1">
            <div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{ width: '10%' }}></div>
          </div>
          <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Low</p>
          <div className="h-full flex-1">
            <div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;

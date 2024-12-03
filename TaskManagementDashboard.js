import React from 'react';

const TaskManagementDashboard = () => {
  return (
    <div className="flex justify-stretch">
      <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Add Task</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Edit Task</span>
        </button>
      </div>

      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#FFFFFF]">
                <th className="table-405c1c48-82b7-453a-bfd8-382753393516-column-120 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                  Task Title
                </th>
                <th className="table-405c1c48-82b7-453a-bfd8-382753393516-column-240 px-4 py-3 text-left text-[#1C160C] w-60 text-sm font-medium leading-normal">
                  Priority
                </th>
                <th className="table-405c1c48-82b7-453a-bfd8-382753393516-column-360 px-4 py-3 text-left text-[#1C160C] w-[400px] text-sm font-medium leading-normal">
                  Due Date
                </th>
                <th className="table-405c1c48-82b7-453a-bfd8-382753393516-column-480 px-4 py-3 text-left text-[#1C160C] w-60 text-sm font-medium leading-normal">
                  Status
                </th>
                <th className="table-405c1c48-82b7-453a-bfd8-382753393516-column-600 px-4 py-3 text-left text-[#1C160C] w-60 text-[#A18249] text-sm font-medium leading-normal">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {['Design Homepage', 'Prepare Presentation', 'Code Review', 'Client Meeting', 'Write Documentation'].map((task, index) => (
                <tr className="border-t border-t-[#E9DFCE]" key={index}>
                  <td className="table-405c1c48-82b7-453a-bfd8-382753393516-column-120 h-[72px] px-4 py-2 w-[400px] text-[#1C160C] text-sm font-normal leading-normal">
                    {task}
                  </td>
                  <td className="table-405c1c48-82b7-453a-bfd8-382753393516-column-240 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full">
                      <span className="truncate">High</span>
                    </button>
                  </td>
                  <td className="table-405c1c48-82b7-453a-bfd8-382753393516-column-360 h-[72px] px-4 py-2 w-[400px] text-[#A18249] text-sm font-normal leading-normal">
                    2023-11-15
                  </td>
                  <td className="table-405c1c48-82b7-453a-bfd8-382753393516-column-480 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4EFE6] text-[#1C160C] text-sm font-medium leading-normal w-full">
                      <span className="truncate">In Progress</span>
                    </button>
                  </td>
                  <td className="table-405c1c48-82b7-453a-bfd8-382753393516-column-600 h-[72px] px-4 py-2 w-60 text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">
                    Edit/Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManagementDashboard;

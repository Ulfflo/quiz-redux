import React, { useState } from "react";

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {React.cloneElement(trigger, { onClick: () => setOpen(!open) })}
      {open && (
        <div className="absolute p-4 z-10 right-0 mt-2 w-[200px] bg-slate-50 rounded shadow-lg">
          <ul className="p-2 list-none">
            {menu.map((menuItem, index) => (
              <li key={index} className="text-[18px] mb-6">
                {menuItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

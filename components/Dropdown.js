import React from "react";

const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;

//Så här såg den ut i main

{
  /* <Dropdown
open={open}
trigger={
  <button onClick={handleOpen} onBlur={() => setOpen(false)}>
    Dropdown
  </button>
}
menu={[
  <button onClick={handleMenuOne}>Menu 1</button>,
  <button onClick={handleMenuTwo}>Menu 2</button>,
]}
/> */
}

import * as React from 'react';

import '../context/Currency.css';
const Currency = () => {
    const handleMenuOne = () => {
      console.log('clicked one');
    };
  
    const handleMenuTwo = () => {
      console.log('clicked two');
    };

    const handleMenuThree = () => {
        console.log('clicked two');
      };
  
      const handleMenuFour = () => {
        console.log('clicked two');
      };
     
    return (
      <Dropdown
        trigger={<button>Currency</button>}
        menu={[
          <button onClick={handleMenuOne}>$ Dollar</button>,
          <button onClick={handleMenuTwo}>£ Pound</button>,
          <button onClick={handleMenuThree}>€ Euro</button>,
          <button onClick={handleMenuFour}>₹ Rupee</button>,
        ]}
      />
    );
  };
  
  const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
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


export default Currency;
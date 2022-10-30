import React from "react";
import "./Navbar.css";
import {IconAlertCircle, IconSearch} from "@tabler/icons";
import {Tooltip, Input} from "@mantine/core";
import {DateRangePicker} from "@mantine/dates";
import {Link} from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src="../../../img/Logo.svg" alt="Logo" />
      </div>
      <Input
          style={{ display: 'flex', justifyContent: 'center', alignItems:' center', width: '500px', marginLeft: '400px'}}
          icon={<IconSearch size={16} />}
          value={props.city[0]}
          onChange={e => props.city[1](e.target.value)}
          placeholder="Select a place where you want to go..."
          rightSection={
            <Tooltip label="This is used for selecting a city" position="top-end" withArrow>
              <div>
                <IconAlertCircle size={18} style={{ display: 'block', opacity: 0.5 }} />
              </div>
            </Tooltip>
          }
      />
      <DateRangePicker
          value={props.dates[0]}
          onChange={e => props.dates[1](e)}
          style={{display: 'flex', justifyContent: 'center', alignItems:' center', marginRight: 'auto', marginLeft: '30px' }}
          placeholder="Pick dates range"
      />
      <Link style={{display: 'flex', justifyContent: 'center', alignItems:' center', margin: 'auto 30px', padding: '5px 15px', backgroundColor: 'lightgray', borderRadius: '6px', textDecoration:'none', color: 'black' }} to="/travel" onClick={() => {
        props.handleTravel();
      }}>
        Find the best travel!
      </Link>
      <div className="navbarList">
        <div className="navbarItem">
          <img
            src="../../../img/AmericaFlag.png"
            alt="America Flag"
            height="50"
          />
          <a href="#">EN</a>
        </div>
        <div className="navbarItem">
          <img
            src="../../../img/DollarIcon.png"
            alt="Dollar Sign"
            height="50"
          />
          <a href="#">Bookings</a>
        </div>
        <div className="navbarItem">
          <img src="../../../img/AccountLogo.png" alt="Account" height="50" />
          <a href="#">Account</a>
        </div>
      </div>
    </div>
  );
};

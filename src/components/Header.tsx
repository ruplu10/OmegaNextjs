import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="cusContainer">
      <div className="contact">
        {/* <div>
      <h2>Hayes Eye Clinic</h2>
      <p>814A Uxbridge Road Hayes,<br/>Middlesex UB4 0RS</p>
      <p>020 8561 1625</p>
      </div> */}

        <div className="location">
          <div className="firstLocation">
            <h1>Hayes Eye Clinic</h1>
            <span className="details">
              <FaLocationDot />{" "}
              <p className="text-sm">
                814A Uxbridge Road Hayes, Middlesex UB4 0RS
              </p>
            </span>

            <span className="details">
              <FaPhoneAlt />
              <p className="text-sm">020 8561 1625</p>
            </span>
          </div>

          <div className="secondLocation">
            <h1>Southall Eye Clinic</h1>
            <span className="details">
              <FaLocationDot />{" "}
              <p className="text-sm">
                31-33 King Street Southall, Middlesex, UB2 4DG
              </p>
            </span>
            <span className="details">
              <FaPhoneAlt />
              <p className="text-sm">020 8574 6927</p>
            </span>
          </div>
        </div>

        <div className="logoDiv">
          <div>
            <Image src="/logo.png" alt="logo" width={200} height={120} />
          </div>
        </div>

        <div className="buttonDiv">
          <div className="button">
            {/* <button className="booking-button">Book an appointment</button> */}
            <Button
              type="button"
              title="Book an appointment"
              variant="btn_dark_blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

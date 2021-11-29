import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

import "./styles.css";

const pages = ["", "mintnft", "details", "pricing"];
let index = 0;
function Footer() {
  const [present, setPresent] = useState(pages[index]);
  const history = useNavigate();

  const changePage = () => {
    if (index + 1 === pages.length) {
      index = 0;
    } else {
      index += 1;
    }
    setPresent(pages[index]);
    history(`/${pages[index]}`);
  };

  console.log(present);

  return (
    <div className="footer">
      <div className="buttons">
        <NavLink to="/details" className="NavLink" activeClassName="active">
          DETAILS <AiFillCaretRight className="traingle" />
        </NavLink>

        <NavLink to="/pricing" className="NavLink" activeClassName="active">
          PRICING <AiFillCaretRight className="traingle" />
        </NavLink>

        <NavLink to="/" className="NavLink" activeClassName="active">
          COLLABORATIONS <AiFillCaretRight className="traingle" />
        </NavLink>

        <NavLink to="/mintnft" className="NavLink" activeClassName="active">
          MINT NFT
        </NavLink>
      </div>

      <button onClick={changePage} className="pageButton">
        NEXT PAGE
      </button>
    </div>
  );
}

export default Footer;

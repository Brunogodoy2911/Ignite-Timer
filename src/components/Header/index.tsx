import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico" end>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

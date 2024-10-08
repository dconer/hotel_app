import { NavLink } from "react-router-dom";

import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineBank,
} from "react-icons/ai";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    background-color: var(--color-brand-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <Link as={NavLink} to="/dashboard">
            <AiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link as={NavLink} to="/bookings">
            <AiOutlineCalendar />
            Bookings
          </Link>
        </li>
        <li>
          <Link as={NavLink} to="/cabins">
            <AiOutlineBank />
            Cabins
          </Link>
        </li>
        <li>
          <Link as={NavLink} to="/users">
            <AiOutlineUser />
            Users
          </Link>
        </li>
        <li>
          <Link as={NavLink} to="/settings">
            <AiOutlineSetting />
            Settings
          </Link>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;

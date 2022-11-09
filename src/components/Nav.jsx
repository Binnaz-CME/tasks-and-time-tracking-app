import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdOutlineTimer,
  MdOutlineHome,
  MdOutlineCalendarToday,
} from 'react-icons/md';

function Nav() {
  return (
    <div className="w-full h-12">
      <section
        className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <nav className="flex justify-between">
          <NavLink
            end
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? 'teal' : '' };
            }}
            className="w-full focus:text-teal-500 hover:text-teal-500  justify-center inline-block text-center pt-2 pb-1"
          >
            <MdOutlineHome
              size="2.2em"
              className="width=25 height=25 inline-block mb-1 "
            />
            <span className="block text-s">Home</span>
          </NavLink>
          <NavLink
            to="/calendar"
            style={({ isActive }) => {
              return { color: isActive ? 'teal' : '' };
            }}
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <MdOutlineCalendarToday
              size="2em"
              className="width=25 height=25 inline-block mb-1"
            />
            <span className="block text-s">Calendar</span>
          </NavLink>
          <NavLink
            to="timer"
            style={({ isActive }) => {
              return { color: isActive ? 'teal' : '' };
            }}
            className="w-full  focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <MdOutlineTimer size="2em" className="inline-block mb-1" />
            <span className="block text-s">Timer</span>
          </NavLink>
        </nav>
      </section>
    </div>
  );
}

export default Nav;

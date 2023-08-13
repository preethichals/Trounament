import React from "react";
import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <>
      <div className="text-center"></div>
      <div className="list-group">
        <h3 className="text-uppercase text-success">Admin Panel</h3>
        <NavLink
         to="/admin/create-category"
        className=" fs-4 p-3 list-group-item list-group-item-action bg-info border-1 border-dark-subtle rounded m-1">
          Create New Tournament
        </NavLink>
        <NavLink
        to="/admin/create-plan"
         className="fs-4 p-3 list-group-item list-group-item-action bg-success border-1 border-dark-subtle rounded m-1">
          Add New Participant
        </NavLink>
        <NavLink
        to="/admin/plan"
         className="fs-4 p-3 list-group-item list-group-item-action bg-secondary border-1 border-dark-subtle rounded m-1">
          View all Participant
        </NavLink>
       
      </div>
    </>
  );
}

export default AdminMenu;

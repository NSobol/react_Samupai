import React from "react";

function MenuItem(props) {
  const { item } = props;
  return (
    <>
      <li className="menu-list-item">
        <a href={item.href}>{item.name}</a>
      </li>
    </>
  );
}

export default MenuItem;

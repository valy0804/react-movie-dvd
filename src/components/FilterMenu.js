import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./FilterMenu.css";

function FilterMenu() {
  return (
    <DropdownButton id="dropdown-item-button" title="Filter by">
      <Dropdown.Item as="button">Comedy</Dropdown.Item>
      <Dropdown.Item as="button">Romance</Dropdown.Item>
      <Dropdown.Item as="button">Drama</Dropdown.Item>
      <Dropdown.Item as="button">Thriller</Dropdown.Item>
      <Dropdown.Item as="button">Fantasy</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterMenu;
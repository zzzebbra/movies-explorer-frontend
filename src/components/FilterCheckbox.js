import React from 'react';

function FilterCheckbox(props) {

  return(
    <section className="filter-checkbox">
      <input onClick={props.onClick} type="checkbox" id="checkbox" className="filter-checkbox__switcher"></input>
      <label htmlFor="checkbox" className="filter-checkbox__switcher-label">Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox

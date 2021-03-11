import React from 'react';

function FilterCheckbox() {
  return(
    <section className="filter-checkbox">
      <input type="checkbox" id="checkbox" className="filter-checkbox__switcher"></input>
      <label for="checkbox" className="filter-checkbox__switcher-label">Короткометражки</label>
    </section>
  )
}

export default FilterCheckbox

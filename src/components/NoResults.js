import React from 'react';

function NoResults() {
  return (
    <section className="no-results">
      <h2 className="no-results__title">Ничего не найдено</h2>
      <p className="no-results__text">
        К сожалению, по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}
export default NoResults;

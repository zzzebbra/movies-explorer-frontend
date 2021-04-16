import React from 'react';

function LoadMore(props) {
  return (
  <section className="load-more">
    <button type="button"onClick={props.loadMore} className="load-more__button">Ещё</button>
  </section>
  )
}

export default LoadMore

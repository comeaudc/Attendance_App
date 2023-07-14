import React from 'react';
import ListItem from './ListItem';

function List(props) {
  return (
    <div>
      <h3>Students Who Are Present: </h3>
      <ul>
        {/* if learners array is greater that 0 map, else null(show nothing) */}
        {props.learners.length > 0
          ? props.learners.map((learner) => {
              return <ListItem learner={learner} />;
            })
          : null}
      </ul>
    </div>
  );
}

export default List;

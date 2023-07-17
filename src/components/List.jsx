import React, { useContext } from 'react';
import { AppContext } from '../contexts/app_context';
import ListItem from './ListItem';

function List() {
  let { learners } = useContext(AppContext);
  return (
    <div>
      <h3>Students Who Are Present: </h3>
      <ul>
        {/* if learners array is greater that 0 map, else null(show nothing) */}
        {learners.length > 0
          ? learners.map((learner) => {
              return <ListItem learner={learner} />;
            })
          : null}
      </ul>
    </div>
  );
}

export default List;

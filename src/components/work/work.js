import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/work/item';
import { ItemContainer, Container, HomeWork, ContainerWork } from './work.css';
import { chunk } from 'lodash';

const Work = ({ items }) => {
  const featuredItems = items.filter((item) => item.id % 5 == 0);
  const regularItems = items.filter((item) => item.id % 5 != 0);
  const chunkItems = chunk(regularItems, 4);

  function arrayIntersect(array1, array2) {
    var arr_join = [],
      arr = array1.map((res, i) => {
        arr_join.push(res);
        if (array2[i]) {
          arr_join.push(array2[i]);
        }
        return arr_join;
      });
    return arr[0];
  }

  const groupedItems = arrayIntersect(featuredItems, chunkItems);

  return (
    <HomeWork>
      <Container>
        {groupedItems.map((item, i) => (
          <ContainerWork key={i}>
            {i % 2 === 0 ? (
              <ItemContainer featured={true}>
                <Item {...item} featured={true} />
              </ItemContainer>
            ) : (
              <ItemContainer>
                {item.map((rItem, i) => (
                  <Item key={i} {...rItem} />
                ))}
              </ItemContainer>
            )}
          </ContainerWork>
        ))}
      </Container>
    </HomeWork>
  );
};

Work.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Work;

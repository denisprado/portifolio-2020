import Container from 'components/container';
import Item from 'components/work/item';
import BREAKPOINTS from 'constants/breakpoints';
import useWindowDimensions from 'helpers/useWindowDimensions';
import { chunk } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ContainerWork,
  ContainerWorkRow,
  HomeWork,
  ItemContainer,
} from './work.css';

const Work = ({ items, grouped }) => {
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

  const featuredItems = items.filter((item, i) => i % 5 == 0);
  const regularItems = items.filter((item, i) => i % 5 != 0);
  const chunkItems = chunk(regularItems, 4);
  const groupedItems = arrayIntersect(featuredItems, chunkItems);
  const rowItems = chunk(groupedItems, 2);
  const { width } = useWindowDimensions();

  return (
    <Container full={false}>
      <HomeWork>
        {width >= BREAKPOINTS['DESKTOP'] && grouped
          ? rowItems.map((row, r) => (
            <ContainerWorkRow key={r} right={r % 2 === 0 && true}>
              {row.map((item, i) => (
                <ContainerWork key={i} right={r % 2 === 0 && true}>
                  <ItemContainer
                    grouped={grouped}
                    featured={i === 0 && true}
                    right={r % 2 === 0 && true}
                  >
                    {i === 0 ? (
                      <Item {...item} featured={true} />
                    ) : (
                        item.map((rItem, i) => (
                          <Item {...rItem} featured={false} key={i} />
                        ))
                      )}
                  </ItemContainer>
                </ContainerWork>
              ))}
            </ContainerWorkRow>
          ))
          : items.map((item, i) => (
            <ItemContainer key={i} featured={false} grouped={grouped}>
              <Item {...item} />
            </ItemContainer>
          ))}
      </HomeWork>
    </Container>
  );
};

Work.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Work;

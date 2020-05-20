import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from 'components/work/item';
import { ItemContainer, Container, HomeWork, ContainerWork, ContainerWorkRow } from './work.css';
import { chunk } from 'lodash';
import BREAKPOINTS from 'constants/breakpoints';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Work = ({ items }) => {

  // Groupded Itens

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
  const rowItems = chunk(groupedItems, 2);

  const { width } = useWindowDimensions();
  return (

    <HomeWork>
      <Container>
        {width >= BREAKPOINTS['DESKTOP'] ? (
          rowItems.map((row, r) => (
            <ContainerWorkRow key={r} right={r % 2 === 0 && true}>
              {row.map((item, i) => (
                <ContainerWork key={i} right={r % 2 === 0 && true}>
                  <ItemContainer featured={i === 0 && true} right={r % 2 === 0 && true} >
                    {i === 0 ?
                      <Item {...item} featured={true} />
                      :
                      item.map((rItem, i) => (
                        <Item {...rItem} featured={false} key={i} />
                      ))}
                  </ItemContainer>
                </ContainerWork>
              ))}
            </ContainerWorkRow>

          ))) : (
            items.map((item, i) => (
              <ItemContainer key={i} >
                <Item {...item} />
              </ItemContainer>
            ))
          )}
      </Container>
    </HomeWork >
  )
};

Work.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Work;

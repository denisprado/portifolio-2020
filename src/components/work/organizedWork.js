import React from 'react';
import Text from 'components/text';
import Title from 'components/title';
import Work from 'components/work';

const OrganizedWork = ({
    group
}) => (
        <span>
            {group.map((element, i) => (
                <div key={i}>
                    <Title size={'medium'}>{element.fieldValue}</Title>
                    <Text>{String(element.totalCount)}</Text>
                    <Work items={element.nodes} grouped={false}></Work>
                </div>
            ))}
        </span>
    );

export default OrganizedWork;

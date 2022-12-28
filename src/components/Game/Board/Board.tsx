import React, { useEffect } from 'react';

import css from './Board.module.scss';

interface BoardProps {
    size?: number;
}

const Board = ({ size = 4 }: BoardProps) => {
    const containerEl = React.useRef<null | HTMLDivElement>(null);
    const numberOfCells = Array(size * size).fill(0);

    useEffect(() => {
        containerEl.current?.style.setProperty('--board-size', String(size));
    }, [size]);

    return (
        <div className={css.container} ref={containerEl}>
            {numberOfCells.map((_, index) => (
                <div key={index} className={css.cell}>
                    {index + 1}
                </div>
            ))}
        </div>
    );
};

export default Board;

import React from 'react';

import css from './Game.module.scss';

import Board from './Board/Board';
import GameHeader from './GameHeader/GameHeader';

const Game = () => {
    return (
        <div className={css.container}>
            <GameHeader />
            <Board />
        </div>
    );
};

export default Game;

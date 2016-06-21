import { createSelector } from 'reselect';
import { REDUCER_KEY } from '../reducers';
import { transformationFunction } from './utility';

const getMatch = (state) => state[REDUCER_KEY].gotMatch.match.players.players;
const getConstants = (state) => state[REDUCER_KEY].gotConstants;

const transformMatchTable = createSelector(
  [getMatch, getConstants],
  (players, constants) => transformationFunction(players, constants)
);

export default transformMatchTable;

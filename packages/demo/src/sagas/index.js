import { all } from 'redux-saga/effects';
import { getNodes } from './nodes';
import { getBlojs, createBloj, addBloj, updateBloj } from './blojs';
import { getLogs, addLog } from './logs';

export default function* () {
  yield all([
    getNodes(),
    getBlojs(),
    createBloj(),
    addBloj(),
    updateBloj(),
    getLogs(),
    addLog(),
  ]);
}
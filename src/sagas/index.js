import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    const sagas = [
        // put all sagas here
    ];

    yield all(sagas);
}

import { commonService } from '@services/common.service';
import { Called } from '@types';
import { tryCatchSagaFactory } from '@utils/try-catch-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { commonActions } from './common.slice';


export const tryCatchSaga = tryCatchSagaFactory(commonActions);

function* requestProfile() {
  const res: Called<typeof commonService.getMe> = yield call(commonService.getMe);
  yield put(commonActions.fetchProfileFulfilled(res));
}

export function* commonRootSaga() {
  yield all([
    takeLatest(commonActions.fetchProfile, tryCatchSaga(requestProfile))
  ]);
}

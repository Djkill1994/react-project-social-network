import { follow } from './users-reducer';
import { usersAPI } from '../api/users-api';
jest.mock('../api/users-api')

const usersAPIMock = usersAPI


test('', async ()=>{
  const thunk = follow(1)
  const dispatchMock = jest.fn()

  // @ts-ignore
  await thunk(dispatchMock)

  expect(dispatchMock).toBeCalledTimes(3)
})

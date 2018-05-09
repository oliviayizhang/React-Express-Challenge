import greetingReducer from '../reducers/greetingReducer'
import * as types from '../actions'

describe('greeting reducer', () => {
  it('should return the initial state', () => {
    expect(greetingReducer(undefined, {})).toEqual(
      {
        index: 0,
        content: [],
        isLoading: false
      }
    )
  })
})

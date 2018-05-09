import * as actions from '../actions'
import * as types from '../actions'

describe('actions', () => {
  it('should create an action to show the next item', () => {
    const expectedAction = {
      type: types.NEXT_ITEM,
    }
    expect(actions.nextItem()).toEqual(expectedAction)
  })
})

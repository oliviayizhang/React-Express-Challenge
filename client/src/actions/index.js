export const NEXT_ITEM = 'NEXT_ITEM'
export const GREETING_REQUEST = 'GREETING_REQUEST'
export const GREETING_RECEIVE = 'GREETING_RECEIVE'

export const nextItem = () => ({
  type: NEXT_ITEM
})

const greetingRequest = () => ({
  type: GREETING_REQUEST
})

const greetingReceive = (payload) => ({
  type: GREETING_RECEIVE,
  payload
})

export const fetchGreetings = (dispatch) => {
  dispatch(greetingRequest())
  fetch('/users')
    .then(res => res.json())
    .then(data => dispatch(greetingReceive(data)))
}

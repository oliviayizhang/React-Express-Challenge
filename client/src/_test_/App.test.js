// import React from 'react';
// import ReactDOM from 'react-dom';
// import { App } from '../components/App';
// import { shallow, mount, render, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
//
// configure({ adapter: new Adapter() });
//
// describe('A test for App component', () => {
//   let wrapper;
//
//   beforeEach(()=>{
//     wrapper = shallow(<App />);
//   })
//
//   it('should render the App Component', () => {
//     expect(wrapper).to.have.length(1)
//   })
// })


// describe('App Component', () => {
//   let wrapper;
//   const mockNextItem = jest.fn();
//
//   beforeEach(() => {
//     wrapper = shallow(<App nextItem={mockNextItem}/>)
//   })
//
//   describe('When click on next button', () => {
//     it('should call the mock next item function', () => {
//       wrapper.find('button').simulate('click')
//       expect(mockNextItem.mock.calls.index).toBe(1)
//     })
//   })
// })

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

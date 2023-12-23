
// <div id='parent'>
//   <div id='child'>
//     <h1 id='heading1'>i am heading</h1>
//   </div>
// </div>

const parent = React.createElement('div', { id: 'parent' },
  [React.createElement('div', { id: 'child1' }, 
  [React.createElement('h1', {}, 'I am heading one'),
  React.createElement('h2', {}, 'I am heading two')]
  ),
  React.createElement('div', { id: 'child2' }, 
  [React.createElement('h1', {}, 'I am heading one'),
  React.createElement('h2', {}, 'I am heading two')]
  )]
  );

console.log(parent)

const heading = React.createElement('h1', { id: 'heading' }, 'testing hello world in react js');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
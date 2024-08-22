import React from 'react';
import './Screen.css';

const Screen = ({ value }) => {
  return (
    <div className='screen'>
      <div className='display-text'>
        {value}
      </div>
    </div>
  );
};

export default Screen;


// import { Textfit } from 'react-textfit';

// class App extends Component {
//   render() {
//     return (
//       <Textfit mode="single">
//         Fat headline!
//       </Textfit>
//     );
//   }
// }
// const Screen = ({value}) => {
//   return (
//     <div className='screen'>
//       <Textfit mode={"single"}
//           forceSingleModeWidth={false}>
//         <div>{value}</div>
//       </Textfit>
//     </div>
//   )
// }

// export default Screen

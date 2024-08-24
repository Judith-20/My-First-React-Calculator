import React from 'react';
import './Screen.css';
import { AutoTextSize } from 'auto-text-size'

const Screen = ({ value }) => {
  return (
    <div className='screen'>
      <AutoTextSize className='display-text'>{value}</AutoTextSize>
    </div>
  );
};

export default Screen;


/*{/* <div className='screen'>
<div className='display-text'>
{value}
</div>
</div> */

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

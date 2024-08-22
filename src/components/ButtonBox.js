 import React from "react";
 import './ButtonBox.css'

const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
// const ButtonBox = ({children}) => {
//   return (
//     <div className="buttonBox">
//       <div className="header">
//         <span></span>
//         <h5>Calc App</h5>
//         <div>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ButtonBox;


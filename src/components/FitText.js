import { Textfit } from 'react-textfit';

class Textfit extends Component {
  render() {
    return (
      <Textfit mode="single">
        Fat headline!
      </Textfit>
    );
  }
}

export default Textfit



// import React, { useRef, useEffect } from 'react';

// const FitText = ({ compressor, children }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.style.fontSize = `${compressor}em`;
//     }
//   }, [compressor]);

//   return <div ref={ref}>{children}</div>;
// };

// export default FitText;

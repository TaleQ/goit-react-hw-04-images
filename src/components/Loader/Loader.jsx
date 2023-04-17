import { LoaderOverlay, Spinner } from "./Loader.styled";

export const Loader = () => (
  <LoaderOverlay>
    <Spinner />
  </LoaderOverlay>
);


// //React-loader-spinner
// import { ColorRing } from 'react-loader-spinner';

// export const Loader = () => (
//   <ColorRing
//     visible={true}
//     height="80px"
//     width="80px"
//     ariaLabel="blocks-loading"
//     wrapperStyle={{
//       position: "fixed",
//       top: 0,
//       width: "100vw",
//       height: "100vh",
//       overflowY: "auto",
//       backgroundColor: "rgba(0, 0, 0, 0.2)",
//       transition: "opacity 500ms linear, visibility 500ms linear"}}
//     wrapperClass="blocks-wrapper"
//     colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//   />
// );

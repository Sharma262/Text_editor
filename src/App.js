import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AnimatedCursor from "react-animated-cursor";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 105, 180"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={2.5}
        clickables={['a', 'button', '.custom-clickable']}
        showSystemCursor={false}
        trailingSpeed={8}
      />
      <TextForm heading="Enter the text to analyze" />
    </>
  );
}

export default App;

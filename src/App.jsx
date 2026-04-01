import { useState } from "react";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "20px",
  });
  const [textColor, setTextColor] = useState("black");
  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };
  const [grid, setGrid] = useState(true);
  return (
    <div>
      <h1 style={{ color: "red" }}>Dynamic and conditional css</h1>
      <button onClick={() => updateTheme("gray", "white")}>Gray Theme</button>
      <br></br>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <br/>
      <button onClick={()=>setGrid(!grid)}>Grid</button>
      <div style={{ display: grid?"flex":"block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          ></img>
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Vanshika joshi</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          ></img>
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Vanshika joshi</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          ></img>
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Vanshika joshi</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          ></img>
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Vanshika joshi</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          ></img>
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Vanshika joshi</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          ></img>
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Vanshika joshi</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

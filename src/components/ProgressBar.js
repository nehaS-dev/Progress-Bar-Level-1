import { useState } from "react";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const updateProgress = (delta) => {
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));
  };
  const getColorBar = () => {
    if (progress >= 80) return "green";
    if (progress >= 40) return "orange";
    return "red";
  };
  return (
    <div style={{ padding: "20px", margin: "auto", maxWidth: "400px" }}>
      <h2>Progress Bar</h2>
      <div
        style={{
          height: "25px",
          backgroundColor: "#ddd",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: getColorBar(),
            transition: "width 0.3s ease-in-out",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {progress}%
        </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => updateProgress(+10)}>+10%</button>
        <button
          onClick={() => updateProgress(-10)}
          style={{ marginLeft: "10px" }}
        >
          -10%
        </button>
      </div>
    </div>
  );
};
export default ProgressBar;

import { useState } from "react";
import "./Mode.css";


export default function Mode() {
 const [counts, setCounts] = useState({ happy: 0, sad: 0, angry: 0 });
const [currentMood, setCurrentMood] = useState(null);
const [history, setHistory] = useState([]);

function handleClick(mood) {
  setCounts(prev => ({ ...prev, [mood]: prev[mood] + 1 }));
  setCurrentMood(mood);
  setHistory(prev => [mood, ...prev].slice(0, 3));
}
function reset() {
  setCounts({ happy: 0, sad: 0, angry: 0 });
  setCurrentMood(null);
  setHistory([]);
}
function RandomMode()
{
    const moods = ["happy", "sad", "angry"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    handleClick(randomMood);
}
 return (
  <section className="mode">
    <h2>Current Mood</h2>
    <div className="current">
      <span className="label"></span>
      <span className="value">{currentMood ?? "Neutral"}</span>
    </div>

    <h3>Choose Mood</h3>
    <div className="mood-actions">
      <button
        className="mood-btn happy"
        onClick={() => handleClick("happy")}
      >
        Happy
        <span className="mood-badge">{counts.happy}</span>
      </button>

      <button
        className="mood-btn sad"
        onClick={() => handleClick("sad")}
      >
        Sad
        <span className="mood-badge">{counts.sad}</span>
      </button>

      <button
        className="mood-btn angry"
        onClick={() => handleClick("angry")}
      >
        Angry
        <span className="mood-badge">{counts.angry}</span>
      </button>
    </div>


<div className="actions">
  <button onClick={reset} className="action-btn reset">
    Reset
  </button>
  <button onClick={RandomMode} className="action-btn random">
    Random Mood
  </button>
</div>

    <h3>Recent (last 3)</h3>
    <div className="history">
      {history.length === 0 ? (
        <span className="muted">No history yet</span>
      ) : (
        history.map((m, i) => (
          <span key={i} className={`history-item ${m}`}>
            {m}
          </span>
        ))
      )}
    </div>
  </section>
);

}
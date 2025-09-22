import { useState } from "react";
import { mapResultToPokemon } from "../tools/MapResultToPokemon";

export default function CsvSmokeTest() {
  const [status, setStatus] = useState<string>("idle");

  const run = async () => {
    setStatus("loading…");
    try {
      const result = await mapResultToPokemon([1, 2, 3, 1]);
      setStatus(`OK ✓ result: ${result}`);
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  };

  return (
    <div style={{ padding: 12 }}>
      <button onClick={run}>Test CSV</button>
      <div style={{ marginTop: 8 }}>{status}</div>
    </div>
  );
}

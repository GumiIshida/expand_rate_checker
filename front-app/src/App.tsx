import { useState } from 'react';
import styles from './App.module.css';
import { calculateExpandRate } from './utils/expandRateCalculator';

function App() {
  const [widthPx, setWidth] = useState<number>(0);
  const [heightPx, setHeight] = useState<number>(0);
  const [maxRange, setMaxRange] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>拡大率計算ツール</h1>


        <div className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="a" className="text-gray-700 font-medium w-40">
              幅(Px):
            </label>
            <input
              type="number"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={widthPx}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="a" className="text-gray-700 font-medium w-40">
              高さ(Px):
            </label>
            <input
              type="number"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={heightPx}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="a" className="text-gray-700 font-medium w-40">
               最大拡大_縦幅(Px):
            </label>
            <input
              type="number"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={maxRange}
              onChange={(e) => setMaxRange(Number(e.target.value))}
            />
          </div>

          <button onClick={() => setResult(calculateExpandRate(widthPx,heightPx,maxRange))} className={styles.button}>
            計算する
          </button>
        </div>

        <div className={styles.result}>
          拡大率: <span className={styles.resultValue}>{result}</span> 倍
        </div>
      </div>
    </div>
  );
}

export default App;
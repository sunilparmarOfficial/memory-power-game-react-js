import Cards from './cards/Cards';
import styles from './style.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <h1>Memory Game</h1>
      <Cards />
    </div>
  );
}

export default App;

import styles from "./page.module.css";
import ProgramList from "../Components/ProgramList";
import FunctionList from "../Components/FunctionList";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Your Heading</div>
      <div className={styles.sections}>
        <div className={`${styles.section}`}>
          Left Section
          <ProgramList />
        </div>
        <div className={`${styles.section} `}>
          <FunctionList />
        </div>
      </div>
    </div>
  );
}

import Banner from "@/components/home/home.banner";
import styles from "../styles/Hello.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner buttonText={"test title"} />
      </main>
    </div>
  );
};

export default Home;

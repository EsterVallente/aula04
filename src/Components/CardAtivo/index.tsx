import styles from "./styles.module.css";

type Props = {
  titulo: string;
  children: any;
};

export function CardAtivo({ titulo, children }: Props) {
  return (
    <div className={styles.card}>
      <h3>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}
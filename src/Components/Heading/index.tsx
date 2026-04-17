import styles from './style.module.css'

type Props = {
  children: any;
};

export function Heading({ children }: Props) {
  const text = String(children);

  let color = "white";

  if (text.includes("Lucro")) {
    color = "blue";
  }

  if (text.includes("Prejuízo")) {
    color = "red";
  }

  return (
    <h1 className={styles.title} style={{ color }}>
      {children}
    </h1>
  );
}
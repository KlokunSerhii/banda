import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      {[...Array(8)].map((e, i) => (
        <div key={i} />
      ))}
    </div>
  );
}

export default Loader;

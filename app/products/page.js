import "@/app/products/productitem.module.css";
function Index() {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image src={props.image} alt={props.name} fill={true} />
        {/* <img src={props.image} alt={props.name} /> */}
      </div>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <span>${props.price}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
    </li>
  );
}

export default Index;

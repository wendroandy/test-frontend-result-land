import classes from './Card.module.css'
const Card = (props) => {
  const googleUrl= `https://maps.google.com/maps?q=${props.address.geo.lat},${props.address.geo.lng}&z=15&output=embed`
  return (
    <div className={classes.card}>
      <div className={classes.name}>{props.name}</div>
      <div><em>Username : </em>{props.username}</div>
      <div><em>Email : </em>{props.email}</div>
      <div><em>Phone : </em>{props.phone}</div>
      <div><em>Location : </em>
        <iframe key={props.id} src={googleUrl} height="270" title="address" ></iframe>
      </div>
      
    </div>
  );
};

export default Card;

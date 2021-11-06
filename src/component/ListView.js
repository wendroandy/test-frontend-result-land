import Card from "./Card";
import classes from './ListView.module.css'

const ListView = (props) => {
  const cardList=props.data.map((dataCard)=>(
    <Card 
      key={dataCard.id}
      name={dataCard.name}
      username={dataCard.username}
      email={dataCard.email}
      phone={dataCard.phone}
      address={dataCard.address}
    />
  ))
  return (
    <div className={classes.listview}>
        {cardList}
    </div>
  );
};

export default ListView;

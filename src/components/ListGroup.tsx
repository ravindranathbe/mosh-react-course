interface Props {
  items?: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  if (!items) return <p>No items found</p>;

  return (
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

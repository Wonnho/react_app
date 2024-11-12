function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      // src="https://i.imgur.com/1bX5QH6.jpg"
      src={person.imgUrl}
      // alt="Lin Lanying"
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile(props) {
  const { person, size } = props;
  return (
    <>
      <Avatar person={person} size={size} />;
    </>
  );
}

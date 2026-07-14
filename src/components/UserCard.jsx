function UserCard({ name, email, company }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>

      <p>{email}</p>

      <p>{company}</p>
    </div>
  );
}

export default UserCard;
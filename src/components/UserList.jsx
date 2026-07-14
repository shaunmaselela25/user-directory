import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <section className="users-section">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          company={user.company.name}
        />
      ))}
    </section>
  );
}

export default UserList;
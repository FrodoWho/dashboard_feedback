import db from "@/db/db";

export default function dashboardPage() {
  return (
    <>
      <UserData />
    </>
  );
}

async function UserData() {
  const userInfo = await db.user.findMany();

  if (userInfo.length === 0) return <p>No users found</p>;
  return (
    <div>
      {userInfo.map((user) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// async function getUserDataCount() {
//   const [userCount] = await Promise.all([db.user.count()]);

//   return {
//     userCount,
//   };
// }

// async function getUserData() {
//   const userInfo = await db.user.findMany({
//     select: {
//       id: true,
//       email: true,
//     },
//   });
// }

// export default async function dashboardPage() {

//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
//         {userInfo.map((user) => (<p>{user.email}</p>)}
//       </div>
//     </>
//   );
// }

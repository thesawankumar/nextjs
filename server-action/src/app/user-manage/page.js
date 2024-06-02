import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-user";
import SingleUserCard from "@/components/single-user-card";

export default async function UserManage() {
  const getListOfUsers = await fetchUsersAction();

  return (
    <div className="p-20 max-w-7xl">
      <div className="flex justify-between">
        <h1>UserManage</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {getListOfUsers &&
        getListOfUsers.data &&
        getListOfUsers.data.length > 0 ? (
          getListOfUsers.data.map((userItem) => (
            <SingleUserCard user={userItem} key={userItem.id} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div>
  );
}

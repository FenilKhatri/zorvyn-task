import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState(() => {
    try {
      const stored = localStorage.getItem("Users");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
  });

  const handleAddUser = () => {
    const updated = [...users, { ...newUser, id: Date.now() }];
    setUsers(updated);
    setShowModal(false);
    setNewUser({ name: "", email: "", role: "User" });
    localStorage.setItem("Users", JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
    localStorage.setItem("Users", JSON.stringify(filtered));
  };

  return (
    <div className="p-5 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Users Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          <Plus size={16} />
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-white/10">
                <td className="p-3">{user.name}</td>
                <td className="p-3 text-gray-300">{user.email}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      user.role === "Admin"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="p-3 flex justify-center gap-3">
                  <button className="text-yellow-400 hover:text-yellow-300">
                    <Pencil size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-slate-900 p-6 rounded-xl w-87.5 border border-white/10">
            <h2 className="text-lg font-semibold mb-4">Add User</h2>

            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full mb-3 p-2 rounded bg-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              className="w-full mb-3 p-2 rounded bg-white/10 outline-none"
            />

            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="w-full mb-4 p-2 rounded bg-white/10 outline-none"
            >
              <option>User</option>
              <option>Admin</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 rounded bg-red-500/20 text-red-400"
              >
                Cancel
              </button>

              <button
                onClick={handleAddUser}
                className="px-3 py-1 rounded bg-emerald-500 text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;

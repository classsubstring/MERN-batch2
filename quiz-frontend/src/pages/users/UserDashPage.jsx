import React from "react";

function UserDashPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome back 👋</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Example cards */}
        <div className="p-5 rounded-xl border bg-card shadow-sm hover:shadow-md transition">
          <h3 className="font-medium mb-2">Total Quizzes</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="p-5 rounded-xl border bg-card shadow-sm hover:shadow-md transition">
          <h3 className="font-medium mb-2">Active Students</h3>
          <p className="text-3xl font-bold">85</p>
        </div>
        <div className="p-5 rounded-xl border bg-card shadow-sm hover:shadow-md transition">
          <h3 className="font-medium mb-2">AI Generated Quizzes</h3>
          <p className="text-3xl font-bold">7</p>
        </div>
      </div>
    </div>
  );
}

export default UserDashPage;

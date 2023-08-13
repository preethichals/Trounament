import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";

function AdminDashboard() {
  return (
    <>
      <Layout>
        <div className=" container p-4 m-6">
       
            <div className="col-md-9">
              {/* Menu */}
              <AdminMenu />
            </div>
          </div>
        
      </Layout>
    </>
  );
}

export default AdminDashboard;

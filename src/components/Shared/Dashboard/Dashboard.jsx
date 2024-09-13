import Sidebar from "../../Layouts/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className='relative min-h-screen md:flex'>
        {/* Sidebar */}
        <Sidebar />
  
        {/* Outlet --> Dynamic content */}
        <div className='flex-1 md:ml-64'>
          <div className='p-5'>
           
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
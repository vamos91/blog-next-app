import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Chart */}
                    <div className="p-4 bg-blue-50 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Chart 1</h2>
                        <div className="h-64 bg-blue-100 flex items-center justify-center rounded">
                            {/* Replace with your chart component */}
                            <span className="text-gray-500">Chart 1 Placeholder</span>
                        </div>
                    </div>

                    {/* Second Chart */}
                    <div className="p-4 bg-green-50 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">Chart 2</h2>
                        <div className="h-64 bg-green-100 flex items-center justify-center rounded">
                            {/* Replace with your chart component */}
                            <span className="text-gray-500">Chart 2 Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
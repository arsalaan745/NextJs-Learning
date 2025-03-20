import axios from "axios";

export default async function getUserInfo() {
    
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    
    await new Promise(r=> setTimeout(r, 1000));

    const data = response.data;

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="border p-8 rounded shadow-lg bg-white">
        <div className="text-lg font-semibold text-gray-800">Name: {data.name}</div>
        <div className="text-lg text-gray-600">Email: {data.email}</div>
        </div>
      </div>
    );
  }
  
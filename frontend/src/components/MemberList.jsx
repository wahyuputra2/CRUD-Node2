import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR, {useSWRConfig} from 'swr';

const MemberList = () => {
    const {mutate} = useSWRConfig();
    const fetcher = async () =>{
        const response = await axios.get('http://localhost:5000/members');
        return response.data;
    };

    const {data} = useSWR('members', fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deleteMember = async (memberId) => {
        await axios.delete(`http://localhost:5000/members/${memberId}`);
        mutate('members');
    }

  return (
    <div className='flex flex-col mt-5'>
      <div className="w-full">
        <Link to="/add" className='bg-green-500 hover:bg-green-700 border-slate-200
        text-white font-bold py-2 px-4 rounded-lg'>Add New</Link>
        <div className="relative shadow rounded-lg mt-3">
            <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                    <tr>
                        <th className='py-3 px-1 text-center'>No</th>
                        <th className='py-3 px-6'>Nama</th>
                        <th className='py-3 px-6'>Alamat</th>
                        <th className='py-3 px-6'>Donasi</th>
                        <th className='py-3 px-1 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((member, index)=>(
                        <tr className='bg-white border-b' key={member.id}>
                        <td className='py-3 px-1 text-center'>{index+1}</td>
                        <td className='py-3 px-6 font-medium text-gray-900'>
                            {member.name}
                        </td>
                        <td className='py-3 px-6'>{member.alamat}</td>
                        <td className='py-3 px-6'>{member.donasi}</td>
                        <td className='py-3 px-1 text-center'>
                            <Link to={`/edit/${member.id}`} className='font-medium bg-blue-400 hover:bg-blue-500
                            px-3 py-1 rounded text-white mr-1'>Edit</Link>
                            <button onClick={()=>deleteMember(member.id)} className='font-medium bg-red-400 hover:bg-red-500
                            px-3 py-1 rounded text-white'>Delete</button>
                        </td>
                    </tr>
                    ))}  
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default MemberList

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditMember = () => {
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [donasi, setDonasi] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getMemberById = async () =>{
            const responese = await axios.get(`http://localhost:5000/members/${id}`);
            setName(responese.data.name);
            setAlamat(responese.data.alamat);
            setDonasi(responese.data.donasi);
        };
        getMemberById();
    }, [id]);

    const updateMember = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/members/${id}`, {
            name: name,
            alamat: alamat,
            donasi: parseInt(donasi) 
        });
        navigate("/");
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow
     shadow-slate-300'>
      <form onSubmit={updateMember} className='my-10'>
        <div className="flex flex-col">
            <div className="mb-5">
                <label className="font-bold text-slate-700">Nama</label>
                <input type="text" className="w-full py-3 mt-1 border border-slate-200
                rounded-lg px-3 focus:outline-none focus:border-slate-500
                hover=shadow"
                placeholder='Member'
                value={name}
                onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-5">
                <label className="font-bold text-slate-700">Alamat</label>
                <input type="text" className="w-full py-3 mt-1 border border-slate-200
                rounded-lg px-3 focus:outline-none focus:border-slate-500
                hover=shadow"
                placeholder='Alamat'
                value={alamat}
                onChange={(e)=>setAlamat(e.target.value)} />
            </div>
            <div className="mb-5">
                <label className="font-bold text-slate-700">Donasi</label>
                <input type="text" className="w-full py-3 mt-1 border border-slate-200
                rounded-lg px-3 focus:outline-none focus:border-slate-500
                hover=shadow"
                placeholder='Donasi'
                value={donasi}
                onChange={(e)=>setDonasi(e.target.value)} />
            </div>
            <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600
            hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>Update</button>
        </div>
      </form>
    </div>
  )
}
export default EditMember;

import React, { useState } from 'react';
import { MoreVertical, CheckCircle, Plus, Clock, CreditCard, DollarSign } from 'lucide-react';
import ToggleSwitch from '../../components/ToggleSwitch';
import Eye from '../../assets/images/eye-blue.png';
import { useNavigate } from 'react-router-dom';

const ArtistManagement = () => {
  const [activeTab, setActiveTab] = useState('All Artists');
  const [currentPage, setCurrentPage] = useState(1);
  const [artists, setArtists] = useState([
    {
      id: 1,
      name: 'Wilson Franci',
      genre: 'Lorem Ipsum',
      plan: { type: 'Bronze Plan', expiry: '10/02/2025' },
      activity: { status: 'Today' },
      earning: '$100.00',
      active: true
    },
    {
      id: 2,
      name: 'Kierra Curtis',
      genre: 'Lorem Ipsum',
      plan: { type: 'Bronze Plan', expiry: '10/02/2025' },
      activity: { status: 'Yesterday' },
      earning: '$100.00',
      active: true
    },
    {
      id: 3,
      name: 'Kianna Torff',
      genre: 'Lorem Ipsum',
      plan: { type: 'Gold Plan', expiry: '10/02/2025' },
      activity: { status: 'Last Month', date: '08/01/2025' },
      earning: '$100.00',
      active: true
    },
    {
      id: 4,
      name: 'Marley Torff',
      genre: 'Lorem Ipsum',
      plan: { type: 'Bronze Plan', expiry: '10/02/2025' },
      activity: { status: 'Last Week', date: '03/02/2025' },
      earning: '$100.00',
      active: true
    },
    {
      id: 5,
      name: 'Mira Korsgaard',
      genre: 'Lorem Ipsum',
      plan: { type: 'Bronze Plan', expiry: '10/02/2025' },
      activity: { status: 'Today' },
      earning: '$100.00',
      active: true
    },
    {
      id: 6,
      name: 'Justin Lubin',
      genre: 'Lorem Ipsum',
      plan: { type: 'Gold Plan', expiry: '10/02/2025' },
      activity: { status: 'Today' },
      earning: '$100.00',
      active: true
    },
    {
      id: 7,
      name: 'Martin Levin',
      genre: 'Lorem Ipsum',
      plan: { type: 'Gold Plan', expiry: '10/02/2025' },
      activity: { status: 'Last Month', date: '01/01/2025' },
      earning: '$100.00',
      active: true
    },
    {
      id: 8,
      name: 'Cooper Bator',
      genre: 'Lorem Ipsum',
      plan: { type: 'Platinum Plan', expiry: '10/02/2025' },
      activity: { status: 'Last Week', date: '05/02/2025' },
      earning: '$100.00',
      active: true
    },
    {
      id: 9,
      name: 'Haylie Madsen',
      genre: 'Lorem Ipsum',
      plan: { type: 'Bronze Plan', expiry: '10/02/2025' },
      activity: { status: 'Yesterday' },
      earning: '$100.00',
      active: true
    },
    {
      id: 10,
      name: 'Rayna Vetrovs',
      genre: 'Lorem Ipsum',
      plan: { type: 'Platinum Plan', expiry: '10/02/2025' },
      activity: { status: 'Yesterday' },
      earning: '$100.00',
      active: true
    },
    {
      id: 11,
      name: 'Erin Philips',
      genre: 'Lorem Ipsum',
      plan: { type: 'Gold Plan', expiry: '10/02/2025' },
      activity: { status: 'Today' },
      earning: '$100.00',
      active: true
    },
    {
      id: 12,
      name: 'Davis Arcand',
      genre: 'Lorem Ipsum',
      plan: { type: 'Platinum Plan', expiry: '10/02/2025' },
      activity: { status: 'Today' },
      earning: '$100.00',
      active: true
    }
  ]);

  const navigate = useNavigate();

  const handleToggleActive = (id) => {
    setArtists(artists.map(artist => 
      artist.id === id ? { ...artist, active: !artist.active } : artist
    ));
  };

  const filteredArtists = artists.filter(artist => {
    switch(activeTab) {
      case 'Online Artists':
        return artist.active;
      case 'Non-active Artists':
        return !artist.active;
      case 'Blocked Artists':
        return !artist.active; // For demo purposes, treating non-active as blocked
      default:
        return true;
    }
  });

  const totalPages = Math.ceil(filteredArtists.length / 12);
  const paginatedArtists = filteredArtists.slice((currentPage - 1) * 12, currentPage * 12);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
              <h2 className="text-2xl font-bold text-white">Our Artists</h2>
              <button onClick={()=>navigate('/dashboard/add-artist')} className="bg-white hover:bg-opacity-20 text-black px-4 py-2 rounded-lg flex items-center gap-2 w-fit">
                <Plus className="h-5 w-5" />
                Add An New Artist
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button className="bg-gradient-to-r from-[#FF0844] to-[#0075FF] text-white px-4 py-2 rounded-lg whitespace-nowrap">
              Select Time
            </button>
            <button className="bg-gradient-to-r from-[#FF0844] to-[#0075FF] text-white px-4 py-2 rounded-lg whitespace-nowrap">
              Subscription Type
            </button>
            <button className="bg-gradient-to-r from-[#FF0844] to-[#0075FF] text-white px-4 py-2 rounded-lg whitespace-nowrap">
              Earnings From
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="overflow-x-auto">
          <div className="flex border-b border-blue-800 min-w-max">
            <button 
              className={`py-2 px-4 flex items-center ${activeTab === 'All Artists' ? 'text-[#00ef45] border-b-2 border-[#00ef45]' : 'text-white'}`}
              onClick={() => setActiveTab('All Artists')}
            >
              All Artists
              <span className={` ${activeTab === 'All Artists' ? 'text-white border border-[#00ef45]' : 'text-white border border-white'} ml-2 text-white text-xs px-3 py-1 rounded-[10px]`}>540</span>
            </button>
            
            <button 
              className={`py-2 px-4 flex items-center ${activeTab === 'Online Artists' ? 'text-[#00ef45] border-b-2 border-[#00ef45]' : 'text-white'}`}
              onClick={() => setActiveTab('Online Artists')}
            >
              Online Artists
              <span className={`${activeTab === 'Online Artists' ? 'text-white border border-[#00ef45]' : 'text-white border border-white'} ml-2 bg-blue-900 text-white text-xs px-3 py-1 rounded-[10px]`}>25</span>
            </button>
            
            <button 
              className={`py-2 px-4 flex items-center ${activeTab === 'Non-active Artists' ? 'text-[#00ef45] border-b-2 border-[#00ef45]' : 'text-white'}`}
              onClick={() => setActiveTab('Non-active Artists')}
            >
              Non-active Artists
              <span className={`${activeTab === 'Non-active Artists' ? 'text-white border border-[#00ef45]' : 'text-white border border-white'}  ml-2 bg-blue-900 text-white text-xs px-3 py-1 rounded-[10px]`}>12</span>
            </button>
            
            <button 
              className={`py-2 px-4 flex items-center ${activeTab === 'Blocked Artists' ? 'text-[#00ef45] border-b-2 border-[#00ef45]' : 'text-white'}`}
              onClick={() => setActiveTab('Blocked Artists')}
            >
              Blocked Artists
              <span className={`${activeTab === 'Blocked Artists' ? 'text-white border border-[#00ef45]' : 'text-white border border-white'}  ml-2 bg-blue-900 text-white text-xs px-3 py-1 rounded-[10px]`}>12</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-4 overflow-x-auto rounded-lg border border-[#515c79]">
          <div className="min-w-[900px]"> {/* Minimum width to prevent squishing */}
            <table className="w-full">
              <thead>
                <tr className="text-white  text-[16px] uppercase bg-gradient-to-b from-[#0075FF] to-[rgba(0,117,255,0)]">
                  <th className="py-3 px-4 text-left w-[20%]">Artists Name</th>
                  <th className="py-3 px-4 text-left w-[15%]">Genre</th>
                  <th className="py-3 px-4 text-left w-[20%]">Subscription Plan</th>
                  <th className="py-3 px-4 text-left w-[15%]">Activity</th>
                  <th className="py-3 px-4 text-left w-[10%]">Earning</th>
                  <th className="py-3 px-4 text-center w-[10%] text-nowrap">View & Edit</th>
                  <th className="py-3 px-4 text-center w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody className='bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)]'>
                {paginatedArtists.map(artist => (
                  <tr key={artist.id} className="text-white text-[14px] border border-[#515c79] hover:bg-blue-900/30">
                    <td className="py-4 px-4 border border-[#515c79] ">{artist.name}</td>
                    <td className="py-4 px-4 border border-[#515c79] ">{artist.genre}</td>
                    <td className="py-4 px-4 border border-[#515c79] ">
                      <div>
                        <div>{artist.plan.type}</div>
                        <div className="text-sm text-gray-400">Exp: {artist.plan.expiry}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 border border-[#515c79] ">
                      <div>
                        <div>{artist.activity.status}</div>
                        {artist.activity.date && (
                          <div className="text-sm text-gray-400">{artist.activity.date}</div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 border border-[#515c79] ">{artist.earning}</td>
                    <td className="py-4 px-4 text-center border border-[#515c79] ">
                      <button className="text-blue-400 hover:text-blue-300">
                        {/* <Eye className="h-5 w-5 mx-auto" /> */}
                        <img src={Eye} alt="View & Edit" className="w-5 h-5 mx-auto object-contain" />
                      </button>
                    </td>
                    <td className="py-4 px-4 text-center border border-[#515c79] " >
                      <div className="flex justify-center">
                        <ToggleSwitch
                          isActive={artist.active} 
                          onChange={() => handleToggleActive(artist.id)} 
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Section - Updated to match the image */}
        <div className="flex justify-between items-center py-4 text-white bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] px-4 border-t-0 border border-[#515c79] rounded-b-lg">
          <div className="text-sm font-medium">
            Showing 1 to 12 of 50 entries
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className="px-4 py-2 text-white hover:text-blue-300 font-medium flex items-center"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;Previous
            </button>
            
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-r from-[#FF0844] to-[#0075FF]"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-md bg-[#515c79]"
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-md bg-[#515c79]"
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            
            <span className="text-white">...</span>
            
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-md bg-[#515c79]"
              onClick={() => setCurrentPage(9)}
            >
              9
            </button>
            
            <button 
              className="px-4 py-2 text-white hover:text-blue-300 font-medium flex items-center"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistManagement;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupDetails, joinGroup } from '../services/aptosService';

const GroupDetailPage = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      const groupDetails = await getGroupDetails(id);
      setGroup(groupDetails);
    };
    fetchGroupDetails();
  }, [id]);

  const handleJoinGroup = async () => {
    try {
      await joinGroup(id);
      alert('Successfully joined the group!');
    } catch (error) {
      console.error('Error joining group:', error);
    }
  };

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Group: {group.name}</h2>
      <p>Token Reward: {group.tokenReward}</p>
      <button onClick={handleJoinGroup}>Join Group</button>
    </div>
  );
};

export default GroupDetailPage;

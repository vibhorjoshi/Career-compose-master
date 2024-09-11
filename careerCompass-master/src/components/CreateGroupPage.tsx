import React, { useState } from 'react';
import { createGroup } from '../services/aptosService';

const CreateGroupPage = () => {
  const [groupName, setGroupName] = useState('');
  const [tokenReward, setTokenReward] = useState(0);

  const handleCreateGroup = async () => {
    try {
      await createGroup(groupName, tokenReward);
      alert('Group created successfully!');
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Study Group</h2>
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Token Reward"
        value={tokenReward}
        onChange={(e) => setTokenReward(Number(e.target.value))}
      />
      <button onClick={handleCreateGroup}>Create Group</button>
    </div>
  );
};

export default CreateGroupPage;

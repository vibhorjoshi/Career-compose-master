import { AptosClient } from 'aptos';

const client = new AptosClient('https://fullnode.devnet.aptos.dev');

export const createGroup = async(groupName, tokenReward) => {
    const payload = {
        type: 'entry_function_payload',
        function: '0x1::StudyGroup::create_group',
        arguments: [groupName, tokenReward],
        type_arguments: [],
    };

    const response = await client.submitTransaction(payload);
    return response;
};

export const getGroupDetails = async(groupId) => {
    // Fetch group details from blockchain
    const group = await client.getAccountResource(groupId, '0x1::StudyGroup::StudyGroup');
    return group.data;
};

export const joinGroup = async(groupId) => {
    const payload = {
        type: 'entry_function_payload',
        function: '0x1::StudyGroup::join_group',
        arguments: [groupId],
        type_arguments: [],
    };

    const response = await client.submitTransaction(payload);
    return response;
};
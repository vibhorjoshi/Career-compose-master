module StudyGroup {

    use Aptos::Account;
    use Aptos::Signer;
    use Aptos::Token;

    struct StudyGroup has key, store {
        owner: address,
        group_name: vector<u8>,
        members: vector<address>,
        token_reward: u64,
    }

    public fun create_group(owner: &signer, group_name: vector<u8>, token_reward: u64) {
        let group = StudyGroup {
            owner: Signer::address_of(owner),
            group_name,
            members: vector::empty<address>(),
            token_reward,
        };
        let owner_addr = Signer::address_of(owner);
        move_to(&owner, group);
    }

    public fun join_group(member: &signer, group_name: vector<u8>) {
        let member_address = Signer::address_of(member);
        let group_ref = borrow_global_mut<StudyGroup>(Signer::address_of(member_address));
        vector::push_back(&mut group_ref.members, member_address);
    }

    public fun reward_member(member_address: address, token_amount: u64) {
        // Logic for distributing rewards to members
        Token::mint(member_address, token_amount);
    }
}

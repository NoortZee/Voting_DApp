const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
    let votingInstance;

    before(async () => {
        votingInstance = await Voting.deployed(); // Получаем развернутый контракт
    });

    it("should allow a user to vote", async () => {
        await votingInstance.vote(0, { from: accounts[0] });
        const candidate = await votingInstance.candidates(0);
        assert.equal(candidate.voteCount.toNumber(), 1, "Vote count should be incremented");
    });
});

import sdk from './1-initialize-sdk.js';

const appModule = sdk.getAppModule(
  '0x06a0a50cC8E6748fD307588A0D587792641Fcc4f'
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "FunDAO's Epic Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0x4c24eb86788d497F0C7268a6b5933fE28f36AC82",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();

// ✅ Successfully deployed vote module, address: 0xe4C9e43B33f422802247187D9a86072C3bfa234d
// Your app address is: 0x06a0a50cC8E6748fD307588A0D587792641Fcc4f
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x4c24eb86788d497F0C7268a6b5933fE28f36AC82",
);

(async () => {
  try {
    // Log the current roles.
    console.log(
      "👀 Roles that exist right now:",
      await tokenModule.getAllRoleMembers()
    );

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      "🎉 Roles after revoking ourselves",
      await tokenModule.getAllRoleMembers()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();

// 👀 Roles that exist right now: {
//   admin: [ '0x5E9a473079e214F75FB23615F5df048FA66946b6' ],
//   minter: [
//     '0x5E9a473079e214F75FB23615F5df048FA66946b6',
//     '0xe4C9e43B33f422802247187D9a86072C3bfa234d'
//   ],
//   pauser: [ '0x5E9a473079e214F75FB23615F5df048FA66946b6' ],
//   transfer: [ '0x5E9a473079e214F75FB23615F5df048FA66946b6' ]
// }
// 🎉 Roles after revoking ourselves {
//   admin: [],
//   minter: [ '0xe4C9e43B33f422802247187D9a86072C3bfa234d' ],
//   pauser: [],
//   transfer: []
// }
// ✅ Successfully revoked our superpowers from the ERC-20 contract
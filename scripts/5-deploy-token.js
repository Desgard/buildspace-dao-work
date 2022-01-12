import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x06a0a50cC8E6748fD307588A0D587792641Fcc4f");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      name: "FunDao Governance Token",
      symbol: "FGG",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

// ✅ Successfully deployed token module, address: 0x4c24eb86788d497F0C7268a6b5933fE28f36AC82
// Your app address is: 0x06a0a50cC8E6748fD307588A0D587792641Fcc4f
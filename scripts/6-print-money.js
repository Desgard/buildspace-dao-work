import { ethers } from "ethers"
import sdk from './1-initialize-sdk.js';

const tokenModule = sdk.getTokenModule(
  "0x4c24eb86788d497F0C7268a6b5933fE28f36AC82",
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$FGG in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();

// ✅ There now is 1000000.0 $FGG in circulation
// Your app address is: 0x06a0a50cC8E6748fD307588A0D587792641Fcc4f
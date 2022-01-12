import sdk from './1-initialize-sdk.js';
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9a4EC8D2dC4565C91119397Cac7d4b7cd2c37Aa6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "GUAGUA FUN DAO Badge",
        description: "This NFT is a ticket for FUN DAO",
        image: readFileSync("scripts/assets/gua.png"),
      }
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()

// 0x06a0a50cC8E6748fD307588A0D587792641Fcc4f
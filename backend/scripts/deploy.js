const { ethers, upgrades} = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const EducationalRecordSystem = await ethers.getContractFactory("EducationalRecordSystem");
  const educationalRecordSystem = await EducationalRecordSystem.deploy(); // Initial supply of 1000 tokens
  await educationalRecordSystem.deployed();


  console.log("EducationalRecordSystem deployed to:", educationalRecordSystem.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// TODO: Enable when @luxfhe/sdk is available
// import { task } from "hardhat/config";
// import type { TaskArguments } from "hardhat/types";
//
// task("task:getCount")
//     .addParam("account", "Specify which account [0, 9]")
//     .setAction(async function (taskArguments: TaskArguments, hre) {
//         const { ethers, deployments } = hre;
//         const luxfhe = await import("@luxfhe/sdk/node");
//         const [signer] = await ethers.getSigners();
//
//         const Counter = await deployments.get("Counter");
//
//         const signers = await ethers.getSigners();
//
//         const counter = await ethers.getContractAt("Counter", Counter.address);
//
//         let permit = await luxfhe.generatePermit(
//             counter.address,
//             undefined, // use the internal provider
//             signer,
//         );
//
//         const eAmount = await counter.connect(signers[taskArguments.account]).getCounter(permit.publicKey);
//         const amount = luxfhe.unseal(Counter.address, eAmount);
//         console.log("Current counter: ", amount);
//     });

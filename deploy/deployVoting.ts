import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { luxfhejs, ethers } = hre;
    const { deploy } = hre.deployments;
    const [signer] = await ethers.getSigners();

    if (hre.network.name === "localluxfhe") {
        if (await signer.getBalance() < ethers.utils.parseEther("1.0")) {
            await luxfhejs.getFunds(signer.address);
        }
    }

    const voting = await deploy("Voting", {
        from: signer.address,
        args: ["question??", ["yes", "no"], 30],
        log: true,
        skipIfAlreadyDeployed: false,
    });

    console.log(`Voting contract: `, voting.address);
};

export default func;
func.id = "deploy_voting";
func.tags = ["Voting"];
/* Discussion:
 * https://discord.gg/66tafq3
 */
/* Description:
 * submitCode - A simple backup functionality which helps to keep track of a Smart Contract's source code, previously saved as a concatenated base64 data chunks directly on chain. So the code will be always available in any case.
 */
pragma solidity ^0.6.0;

contract ContractsIndex {
    function submitCode(address sender, uint256 value, address contractAddress, address sourceLocation, uint256 sourceLocationId) public {
        IMVDProxy(msg.sender).emitEvent("NewCode(address_indexed,address_indexed,address,address,address,uint256)", abi.encodePacked(sender), abi.encodePacked(contractAddress), abi.encode(sender, contractAddress, sourceLocation, sourceLocationId));
    }
}

interface IMVDProxy {
    function emitEvent(string calldata eventSignature, bytes calldata firstIndex, bytes calldata secondIndex, bytes calldata data) external;
}
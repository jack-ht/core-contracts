"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signMessage = exports.generatedWallets = exports.privateKeys = void 0;
const ethers_1 = require("ethers");
exports.privateKeys = [
    '0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d',
    '0x5d862464fe9303452126c8bc94274b8c5f9874cbd219789b3eb2128075a76f72',
    '0xdf02719c4df8b9b8ac7f551fcb5d9ef48fa27eef7a66453879f4d8fdc6e78fb1',
];
function generatedWallets(provider) {
    return exports.privateKeys.map((key) => {
        return new ethers_1.ethers.Wallet(key, provider);
    });
}
exports.generatedWallets = generatedWallets;
async function signMessage(message, wallet) {
    const messageHash = ethers_1.ethers.utils.id(message);
    const messageHashBytes = ethers_1.ethers.utils.arrayify(messageHash);
    const flatSig = await wallet.signMessage(messageHashBytes);
    return ethers_1.ethers.utils.arrayify(flatSig);
}
exports.signMessage = signMessage;
//# sourceMappingURL=generatedWallets.js.map
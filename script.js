window.voidEthereumAddress = '0x0000000000000000000000000000000000000000';
window.voidEthereumAddressExtended = '0x0000000000000000000000000000000000000000000000000000000000000000';
window.descriptionWordLimit = 300;
window.urlRegex = /(https?:\/\/[^\s]+)/gs;
window.solidityImportRule = /import( )*"(\d+)"( )*;/gs;
window.pragmaSolidityRule = /pragma( )*solidity( )*(\^|>)\d+.\d+.\d+;/gs;
window.base64Regex = /data:(\w+)\/(\w+);base64,/gs;

window.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};

window.context = {
    "ethereumNetwork": {
        "1": "",
        "3": "Ropsten"
    },
    "etherscanURL": "https://etherscan.io/",
    "etherscanURLRopsten": "https://ropsten.etherscan.io/",
    "defaultOcelotTokenAddress": "0x9784b427ecb5275c9300ea34adef57923ab170af",
    "defaultOcelotTokenAddressRopsten": "0x6ae6cf934b2bd8c84d932aee75102ca2ef1bf2ce",
    "singleTokenLength" : 23000,
    "dfoAddress": "0xc3BE549499f1e504c793a6c89371Bd7A98229500",
    "dfoAddressRopsten": "0x29A444a44e1a8b286FbB3903d8F5D9A5c54dd2fc",
    "ensAddress": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    "deploySearchStart": 9779603,
    "deploySearchStartRopsten": 7465062,
    "transactionConfirmations": 1,
    "transactionConfirmationsTimeoutMillis": 7000,
    "OcelotAbi": [{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"finalize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"chainSize","type":"uint256"}],"name":"Finalized","type":"event"},{"inputs":[{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"mintAndFinalize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"mintAndFinalize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"chunkPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"chunkSize","type":"uint256"}],"name":"Minted","type":"event"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"content","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"metadata","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],
    "propsalAbi": [{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"address","name":"location","type":"address"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"string","name":"returnAbiParametersArray","type":"string"},{"internalType":"string","name":"replaces","type":"string"},{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Accept","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MoveToAccept","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MoveToRefuse","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Refuse","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RetireAccept","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RetireAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RetireRefuse","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"accept","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"disable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"m","type":"string"}],"name":"formatReturnAbiParametersArray","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getCodeName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"}],"name":"getFirstJSONPart","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getLocation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMethodSignature","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProposer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReplaces","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReturnAbiParametersArray","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSourceLocation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSourceLocationId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSurveyDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSurveyEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getVote","outputs":[{"internalType":"uint256","name":"accept","type":"uint256"},{"internalType":"uint256","name":"refuse","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"address","name":"location","type":"address"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"string","name":"returnAbiParametersArray","type":"string"},{"internalType":"string","name":"replaces","type":"string"},{"internalType":"address","name":"proxy","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isEmergency","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInternal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSubmitable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isTerminated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"moveToAccept","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"moveToRefuse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"needsSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"refuse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"retireAccept","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retireAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"retireRefuse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"emergency","type":"bool"},{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"},{"internalType":"address","name":"proposer","type":"address"}],"name":"setCollateralData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"terminate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"b","type":"bytes"}],"name":"toAddress","outputs":[{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"toJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"toLowerCase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"toString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_i","type":"uint256"}],"name":"toString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"bs","type":"bytes"}],"name":"toUint256","outputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],
    "votingTokenAbi": [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],
    "stateHolderAbi": [{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"clear","outputs":[{"internalType":"string","name":"oldDataType","type":"string"},{"internalType":"bytes","name":"oldVal","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"originalAddress","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"},{"internalType":"address","name":"val","type":"address"}],"name":"setAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"},{"internalType":"bool","name":"val","type":"bool"}],"name":"setBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"},{"internalType":"bytes","name":"val","type":"bytes"}],"name":"setBytes","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"},{"internalType":"string","name":"val","type":"string"}],"name":"setString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"setUint256","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"originalAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"m","type":"string"}],"name":"formatReturnAbiParametersArray","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getBytes","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getDataType","outputs":[{"internalType":"string","name":"dataType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"}],"name":"getFirstJSONPart","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getInfo","outputs":[{"internalType":"string","name":"dataType","type":"string"},{"internalType":"bytes","name":"value","type":"bytes"},{"internalType":"uint256","name":"position","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getState","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"dataType","type":"string"},{"internalType":"bytes","name":"value","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStateSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"varName","type":"string"}],"name":"getUint256","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"b","type":"bytes"}],"name":"toAddress","outputs":[{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"toLowerCase","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"toString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_i","type":"uint256"}],"name":"toString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"bs","type":"bytes"}],"name":"toUint256","outputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"stateMutability":"pure","type":"function"}],
    "dfoAbi": [{"inputs":[{"internalType":"address","name":"votingTokenAddress","type":"address"},{"internalType":"address","name":"stateHolderAddress","type":"address"},{"internalType":"address","name":"functionalityModelsManagerAddress","type":"address"},{"internalType":"address","name":"functionalityProposalManagerAddress","type":"address"},{"internalType":"address","name":"functionalitiesManagerAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"key","type":"string"},{"indexed":true,"internalType":"bytes32","name":"firstIndex","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"secondIndex","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Event","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"codeName","type":"string"},{"indexed":false,"internalType":"uint256","name":"position","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposal","type":"address"},{"indexed":true,"internalType":"string","name":"replaced","type":"string"},{"indexed":false,"internalType":"address","name":"replacedLocation","type":"address"},{"indexed":false,"internalType":"bool","name":"replacedWasSubmitable","type":"bool"},{"indexed":false,"internalType":"string","name":"replacedMethodSignature","type":"string"},{"indexed":false,"internalType":"bool","name":"replacedWasInternal","type":"bool"},{"indexed":false,"internalType":"bool","name":"replacedNeededSender","type":"bool"},{"indexed":false,"internalType":"address","name":"replacedProposal","type":"address"},{"indexed":false,"internalType":"uint256","name":"replacedPosition","type":"uint256"}],"name":"FunctionalitySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"MVDFunctionalitiesManagerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"MVDFunctionalityModelsManagerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"MVDFunctionalityProposalManagerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"proposal","type":"address"}],"name":"Proposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"proposal","type":"address"},{"indexed":false,"internalType":"bool","name":"success","type":"bool"}],"name":"ProposalSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ProxyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"StateHolderChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"TokenChanged","type":"event"},{"inputs":[{"internalType":"address","name":"location","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"callFromManager","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newAddress","type":"address"}],"name":"changeProxy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"name":"disableProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"eventSignature","type":"string"},{"internalType":"bytes","name":"firstIndex","type":"bytes"},{"internalType":"bytes","name":"secondIndex","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"emitEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"uint256","name":"position","type":"uint256"},{"internalType":"address","name":"proposal","type":"address"},{"internalType":"string","name":"replaced","type":"string"},{"internalType":"address","name":"location","type":"address"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"},{"internalType":"address","name":"proposalAddress","type":"address"},{"internalType":"uint256","name":"replacedPosition","type":"uint256"}],"name":"emitFromManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"functionalitiesToJSON","outputs":[{"internalType":"string","name":"functionsJSONArray","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"l","type":"uint256"}],"name":"functionalitiesToJSON","outputs":[{"internalType":"string","name":"functionsJSONArray","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFunctionalitiesAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"getFunctionalityAddress","outputs":[{"internalType":"address","name":"location","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDFunctionalitiesManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDFunctionalityModelsManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDFunctionalityProposalManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"getPendingProposal","outputs":[{"internalType":"address","name":"proposalAddress","type":"address"},{"internalType":"bool","name":"isReallyPending","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStateHolderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"hasFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"votingTokenAddress","type":"address"},{"internalType":"address","name":"stateHolderAddress","type":"address"},{"internalType":"address","name":"functionalityModelsManagerAddress","type":"address"},{"internalType":"address","name":"functionalityProposalManagerAddress","type":"address"},{"internalType":"address","name":"functionalitiesManagerAddress","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"functionality","type":"address"}],"name":"isAuthorizedFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"functionality","type":"address"}],"name":"isValidFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"proposal","type":"address"}],"name":"isValidProposal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bool","name":"emergency","type":"bool"},{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"string","name":"returnAbiParametersArray","type":"string"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"},{"internalType":"string","name":"replaces","type":"string"}],"name":"newProposal","outputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"read","outputs":[{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMVDFunctionalitiesManagerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMVDFunctionalityModelsManagerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setMVDFunctionalityProposalManagerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setStateHolderAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"name":"startProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"submit","outputs":[{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
};

HTMLDocument.prototype.getElementsByXPath = HTMLElement.prototype.getElementsByXPath = function getElementsByXPath(path) {
    var query = document.evaluate(path, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var results = [];
    for (var i = 0; i < query.snapshotLength; i++) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

window.Main = async function Main() {
    if (!await window.blockchainSetup()) {
        return;
    }
    window.onEthereumUpdate();
};

window.newContract = function newContract(abi, address) {
    window.contracts = window.contracts || {};
    var key = window.web3.utils.sha3(JSON.stringify(abi));
    var contracts = (window.contracts[key] = window.contracts[key] || {});
    address = address || window.voidEthereumAddress;
    key = address.toLowerCase();
    contracts[key] = contracts[key] || new window.web3.eth.Contract(abi, address === window.voidEthereumAddress ? undefined : address);
    return contracts[key];
};

window.blockchainSetup = async function blockchainSetup() {
    if (typeof window.ethereum === 'undefined') {
        return;
    }
    try {
        window.ethereum.autoRefreshOnNetworkChange && (window.ethereum.autoRefreshOnNetworkChange = false);
        window.ethereum.on && window.ethereum.on('networkChanged', window.onEthereumUpdate);
        window.ethereum.on && window.ethereum.on('accountsChanged', window.onEthereumUpdate);
        return window.onEthereumUpdate(0);
    } catch (e) {
        throw 'An error occurred while trying to setup the Blockchain Connection: ' + (e.message || e + '.');
    }
};

window.loadDFO = async function loadDFO(address, allAddresses) {
    allAddresses = allAddresses || [];
    allAddresses.push(address);
    var dfo = window.newContract(window.context.dfoAbi, address);
    try {
        await window.blockchainCall(dfo.methods.getToken);
    } catch (e) {
        var logs = await window.web3.eth.getPastLogs({
            address,
            topics: [
                window.proxyChangedTopic = window.proxyChangedTopic || window.web3.utils.sha3('ProxyChanged(address)')
            ],
            fromBlock: '0'
        });
        return await window.loadDFO(window.web3.eth.abi.decodeParameter('address', logs[0].topics[1]), allAddresses);
    }
    dfo.options.originalAddress = allAddresses[0];
    dfo.options.allAddresses = allAddresses;
    return dfo;
};

window.onEthereumUpdate = function onEthereumUpdate(millis) {
    return new Promise(function(ok) {
        setTimeout(async function() {
            var update = false;
            if (!window.networkId || window.networkId !== await window.web3.eth.net.getId()) {
                delete window.contracts;
                window.web3 = new window.Web3Browser(window.web3.currentProvider);
                window.web3.currentProvider.setMaxListeners(0);
                window.networkId = await window.web3.eth.net.getId();
                var network = window.context.ethereumNetwork[window.networkId];
                if (network === undefined || network === null) {
                    return alert('This network is actually not supported!');
                }
                window.dfoHub = {
                    key: 'DFO',
                    dFO: await window.loadDFO(window.getNetworkElement('dfoAddress')),
                    startBlock: window.getNetworkElement('deploySearchStart')
                };
                window.loadFunctionalities(window.dfoHub);
                window.loadContracts();
            }
            try {
                window.walletAddress = (await window.web3.eth.getAccounts())[0];
            } catch (e) {}
            return ok(window.web3);
        }, !isNaN(millis) ? millis : 550);
    });
};

window.getNetworkElement = function getNetworkElement(element) {
    var network = window.context.ethereumNetwork[window.networkId];
    if (network === undefined || network === null) {
        return;
    }
    return window.context[element + network];
};

window.isEthereumAddress = function isEthereumAddress(ad) {
    if (ad === undefined || ad === null) {
        return false;
    }
    var address = ad.split(' ').join('');
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        return true;
    } else {
        address = address.replace('0x', '');
        var addressHash = window.web3.utils.sha3(address.toLowerCase());
        for (var i = 0; i < 40; i++) {
            if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
                //return false;
            }
        }
    }
    return true;
};

window.getAddress = async function getAddress() {
    await window.ethereum.enable();
    return (window.walletAddress = (await window.web3.eth.getAccounts())[0]);
};

window.getSendingOptions = function getSendingOptions(transaction) {
    return new Promise(async function(ok, ko) {
        if (transaction) {
            var address = await window.getAddress();
            return transaction.estimateGas({
                    from: address,
                    gasPrice: window.web3.utils.toWei("13", "gwei")
                },
                function(error, gas) {
                    if (error) {
                        return ko(error.message || error);
                    }
                    return ok({
                        from: address,
                        gas: gas || window.gasLimit || '7900000'
                    });
                });
        }
        return ok({
            from: window.walletAddress || null,
            gas: window.gasLimit || '7900000'
        });
    });
};

window.blockchainCall = async function blockchainCall(call) {
    var args = [];
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
    }
    var method = (call.implementation ? call.get : call.new ? call.new : call).apply(call, args);
    return await (method._method.stateMutability === 'view' || method._method.stateMutability === 'pure' ? method.call(await window.getSendingOptions()) : window.sendBlockchainTransaction(method));
};

window.sendBlockchainTransaction = function sendBlockchainTransaction(transaction) {
    return new Promise(async function(ok, ko) {
        try {
            (transaction = transaction.send ? transaction.send(await window.getSendingOptions(transaction), err => err && ko(err.message || err)) : transaction).on('transactionHash', transactionHash => {
                var timeout = async function() {
                    var receipt = await window.web3.eth.getTransactionReceipt(transactionHash);
                    if (!receipt || !receipt.blockNumber || parseInt(await window.web3.eth.getBlockNumber()) <= (parseInt(receipt.blockNumber) + (window.context.transactionConfirmations || 0))) {
                        return window.setTimeout(timeout, window.context.transactionConfirmationsTimeoutMillis);
                    }
                    return transaction.catch(ko).then(ok);
                };
                window.setTimeout(timeout);
            });
        } catch(e) {
            return ko(e.message || e);
        }
    });
};

window.loadFunctionalities = function loadFunctionalities(element, callback, ifNecessary) {
    if (!element) {
        return new Promise(ok => ok());
    }
    if (ifNecessary && element.functionalities && Object.keys(element.functionalities).length && element.functionalitiesAmount) {
        return new Promise(ok => ok(element.functionalities));
    }
    if (element.waiters) {
        return new Promise(function(ok) {
            if (!element.waiters || element.waiters.length === 0) {
                delete element.waiters;
                return ok(element.functionalities);
            }
            element.waiters.push([ok, callback]);
        });
    }
    element.waiters = [];
    return new Promise(async function(ok) {
        var functionalitiesJSON = await blockchainCall(element.dFO.methods.functionalitiesToJSON);
        var functionalities = window.parseFunctionalities(functionalitiesJSON);
        var keys = Object.keys(functionalities);
        element.functionalities && Object.keys(element.functionalities).map(key => {
            if (!functionalities[key]) {
                delete element.functionalities[key];
            }
        });
        element.functionalities && callback && callback();
        element.functionalities = element.functionalities || {};
        for (var i in keys) {
            var key = keys[i];
            var functionality = functionalities[key];
            if (element && functionality.codeName === 'getMinimumBlockNumberForSurvey') {
                element.getMinimumBlockNumberForSurvey = functionality;
            }
            if (element && functionality.codeName === 'checkSurveyResult') {
                element.checkSurveyResult = functionality;
            }
            functionality.inputParameters = [];
            try {
                functionality.inputParameters = functionality.methodSignature.split(functionality.methodSignature.substring(0, functionality.methodSignature.indexOf('(') + 1)).join('').split(')').join('');
                functionality.inputParameters = functionality.inputParameters ? functionality.inputParameters.split(',') : [];
            } catch (e) {}
            try {
                functionality.code = functionality.code || await window.loadContent(functionality.sourceLocationId, functionality.sourceLocation);
            } catch (e) {}
            element.functionalities && (element.functionalities[key] = functionality);
            callback && callback();
            for (var i in element.waiters) {
                var c = element.waiters[i][1];
                c && setTimeout(c);
            }
            if (!element.functionalities) {
                break;
            }
        }
        if (element.waiters) {
            for (var i in element.waiters) {
                var end = element.waiters[i][0];
                setTimeout(() => end(element.functionalities));
            }
            delete element.waiters;
        }
        return ok(element.functionalities);
    });
};

window.parseFunctionalities = function parseFunctionalities(functionalitiesJSON) {
    try {
        functionalitiesJSON = functionalitiesJSON.trim();
        var functs = JSON.parse(!functionalitiesJSON.endsWith(',') ? functionalitiesJSON : functionalitiesJSON.substring(0, functionalitiesJSON.length - 1) + ']');
        var functionalities = {};
        functs.map(it => functionalities[it.codeName] = it);
        return functionalities;
    } catch (e) {
        console.error(e);
        console.log(functionalitiesJSON);
    }
    return null;
};

window.loadContent = async function loadContent(tokenId, ocelotAddress, raw) {
    var metadata = await window.loadContentMetadata(tokenId, ocelotAddress);
    var chains = [];
    var ocelot = window.newContract(window.context.OcelotAbi, (!ocelotAddress || ocelotAddress === window.voidEthereumAddress) ? window.getNetworkElement('defaultOcelotTokenAddress') : ocelotAddress);
    for (var i = 0; i < metadata[0]; i++) {
        var content = await window.blockchainCall(ocelot.methods.content, tokenId, i);
        chains.push(i === 0 ? content : content.substring(2));
    }
    var value = chains.join('');
    value = window.web3.utils.toUtf8(value).trim();
    value = raw ? value : Base64.decode(value.substring(value.indexOf(',')));
    var regex = new RegExp(window.base64Regex).exec(value);
    !raw && regex && regex.index === 0 && (value = Base64.decode(value.substring(value.indexOf(','))));
    return value;
};

window.loadContentMetadata = async function loadContentMetadata(tokenId, ocelotAddress) {
    var ocelot = window.newContract(window.context.OcelotAbi, (!ocelotAddress || ocelotAddress === window.voidEthereumAddress) ? window.getNetworkElement('defaultOcelotTokenAddress') : ocelotAddress);
    var metadata = await window.blockchainCall(ocelot.methods.metadata, tokenId);
    metadata[0] = parseInt(metadata[0]);
    metadata[1] = parseInt(metadata[1]) * 2 + 4;
    return metadata;
};

window.getCompleteCode = async function getCompleteCode(code, alreadyLoaded) {
    alreadyLoaded = alreadyLoaded || [];
    var matches = code.match(new RegExp(window.solidityImportRule));
    if (!matches || matches.length === 0) {
        return code;
    }
    var tokens = matches.map(it => parseInt(it.split('"')[1]));
    for (var i in tokens) {
        var token = tokens[i];
        if (alreadyLoaded.filter(it => it === token).length > 0) {
            continue;
        }
        alreadyLoaded.push(token);
        var cached = window.getCodeCache()[token];
        cached = cached || {
            code: await window.loadContent(token)
        };
        cached.lastUsed = new Date().getTime();
        window.codeCache[token] = cached;
        code = code.split(matches[i]).join(cached.code.replace(new RegExpr(window.pragmaSolidityRule), ""));
    }
    return await window.getCompleteCode(code);
};

window.getCodeCache = function getCodeCache() {
    window.codeCache = window.codeCache || {};
    Object.keys(window.codeCache).map(key => {
        var cached = window.codeCache[key];
        if (new Date().getTime() > (cached.lastUsed + (60000 * 5))) {
            delete window.cache[key];
        }
    });
    return window.codeCache;
};

window.split = function split(content, length) {
    var regex = new RegExp(window.base64Regex).exec(content);
    content = regex && regex.index === 0 ? content : ('data:text/plain;base64,' + Base64.encode(content));
    var data = window.web3.utils.fromUtf8(content);
    var inputs = [];
    var defaultLength = (length || window.context.singleTokenLength) - 2;
    if (data.length <= defaultLength) {
        inputs.push(data);
    } else {
        while (data.length > 0) {
            var length = data.length < defaultLength ? data.length : defaultLength;
            var piece = data.substring(0, length);
            data = data.substring(length);
            if (inputs.length > 0) {
                piece = '0x' + piece;
            }
            inputs.push(piece);
        }
    }
    return inputs;
};

window.mint = async function mint(inputs, ocelotAddress, silent, firstChunkCallback, tokenId, start) {
    var ocelot = window.newContract(window.context.OcelotAbi, ocelotAddress || (!ocelotAddress || ocelotAddress === window.voidEthereumAddress) ? window.getNetworkElement('defaultOcelotTokenAddress') : ocelotAddress);
    inputs = (typeof inputs).toLowerCase() === 'string' ? window.split(inputs) : inputs;
    for (var i = start || 0; i < inputs.length; i++) {
        var input = inputs[i];
        var method = ocelot.methods['mint' + (i === inputs.length - 1 ? 'AndFinalize' : '') + (i === 0 ? '' : ('(uint256,bytes)'))];
        var args = [
            method
        ];
        i > 0 && args.push(tokenId)
        args.push(input);
        var txReceipt = await window.blockchainCall.apply(window, args);
        if (!tokenId) {
            tokenId = parseInt(txReceipt.events.Minted.returnValues.tokenId);
            firstChunkCallback && firstChunkCallback(tokenId);
        }
    }
    return tokenId;
};

window.getDFOLogs = async function getDFOLogs(args) {
    window.dfoEvent = window.dfoEvent || window.web3.utils.sha3('Event(string,bytes32,bytes32,bytes)');
    var logArgs = {
        topics: [
            window.dfoEvent
        ],
        fromBlock: '0',
        toBlock: 'latest'
    };
    args.address && (logArgs.address = args.address);
    args.event && logArgs.topics.push(args.event.indexOf('0x') === 0 ? args.event : window.web3.utils.sha3(args.event));
    args.topics && logArgs.topics.push(...args.topics);
    args.fromBlock && (logArgs.fromBlock = args.fromBlock);
    args.toBlock && (logArgs.toBlock = args.toBlock);
    return window.formatDFOLogs(await window.web3.eth.getPastLogs(logArgs), args.event && args.event.indexOf('0x') === -1 ? args.event : undefined);
};

window.formatDFOLogs = function formatDFOLogs(logVar, event) {
    if (!logVar || (!this.isNaN(logVar.length) && logVar.length === 0)) {
        return logVar;
    }
    var logs = [];
    if (logVar.length) {
        logs.push(...logVar);
    } else {
        event = event || logVar.event;
        logs.push(logVar);
    }
    var deployArgs = [];
    if (event) {
        var rebuiltArgs = event.substring(event.indexOf('(') + 1);
        rebuiltArgs = JSON.parse('["' + rebuiltArgs.substring(0, rebuiltArgs.indexOf(')')).split(',').join('","') + '"]');
        for (var i in rebuiltArgs) {
            if (!rebuiltArgs[i].endsWith('_indexed')) {
                deployArgs.push(rebuiltArgs[i]);
            }
        }
    }
    for (var i in logs) {
        var log = logs[i];
        log.topics && log.topics.splice(0, 1);
        log.raw && log.raw.topics && log.raw.topics.splice(0, 1);
        try {
            log.data && (log.data = web3.eth.abi.decodeParameter("bytes", log.data));
            log.raw && log.raw.data && (log.raw.data = web3.eth.abi.decodeParameter("bytes", log.raw.data));
        } catch (e) {}
        if (deployArgs.length > 0 && (deployArgs.length > 1 || deployArgs[0] !== "")) {
            var data = web3.eth.abi.decodeParameters(deployArgs, log.data || (log.raw && log.raw.data));
            log.data && (log.data = []);
            log.raw && log.raw.data && (log.raw.data = []);
            Object.keys(data).map(key => {
                if (isNaN(parseInt(key))) {
                    return;
                }
                log.data && log.data.push(data[key]);
                log.raw && log.raw.data && log.raw.data.push(data[key]);
            });
        }
    }
    return logVar.length ? logs : logVar;
};

window.onload = function onload() {
    window.Main().catch(console.error);
};

window.loadCache = function loadCache() {
    window.cache = {};
    var cache = window.localStorage.getItem(window.networkId);
    if(!cache) {
        return;
    }
    window.cache = JSON.parse(cache);
};

window.saveCache = function saveCache() {
    window.localStorage.setItem(window.networkId, JSON.stringify(window.cache = window.cache || {}));
};

window.getEvents = function getEvents(address) {
    return window.getDFOLogs({
        address: window.dfoHub.dFO.options.allAddresses,
        event: "NewCode(address_indexed,address_indexed,address,address,address,uint256)",
        fromBlock: window.dfoHub.startBlock,
        topics: address ? [undefined, window.web3.utils.sha3(address)] : undefined
    });
}

window.loadContracts = async function loadContracts(address) {
    document.getElementById('list').innerHTML = '';
    window.loadCache();
    address && window.loadContract(address);
    !address && Object.keys(window.cache).forEach(window.loadContract);
    !address && (await window.getEvents(address)).forEach(window.loadContract);
};

window.loadContract = async function loadContract(event) {
    var element = event.contract ? event : {contract: (event.data && event.data[1]) || event};
    var address = element.contract;
    element = window.cache[address] || element;
    window.populateLi(element);
    var oldFound = element.found;
    !element.sourceLocation && event.data && (element.sourceLocation = event.data[2]);
    !element.sourceLocationId && event.data && (element.sourceLocationId = event.data[3]);
    !element.found && element.sourceLocation && element.sourceLocationId && (element.found = await window.tryFind(element));
    if(!element.found && !event.contract && !event.data) {
        return window.getEvents(event).then(events => events.forEach(window.loadContract));
    }
    (element.found !== oldFound || !window.cache[address]) && (window.cache[address] = element) && window.saveCache();
    window.populateLi(element);
};

window.populateLi = function populateLi(element, li) {
    var address = element.contract;
    li = li || document.getElementById(address);
    if(!li) {
        var li = document.createElement('li');
        li.id = address;
        document.getElementById('list').appendChild(li);
    }

    if(li.childElementCount > 0) {
        if(li.dataset.found === 'true') {
            return;
        }
        if(!element.found) {
            return;
        }
        li.innerHTML = '';
    }

    var icon = document.createElement('span');
    icon.innerHTML = element.found ? '&#9989;' : '&#127384;';
    li.appendChild(icon);

    var contractName = document.createElement('p');
    contractName.innerText = address;
    li.appendChild(contractName);

    var command = document.createElement('a');
    command.className = element.found ? "YES" : "NO";
    command.href = "javascript:;";
    command.innerText = element.found ? "Code" : "Validate";
    command.dataset.contract = address;
    command.onclick = element.found ? window.toggleCode : window.toggleLocalValidate;
    li.appendChild(command);

    var etherscan = document.createElement('a');
    etherscan.href = window.getNetworkElement('etherscanURL') + '/address/' + address;
    etherscan.target = "_blank";
    etherscan.innerText = "Etherscan";
    etherscan.className = "ETHSCAN";
    li.appendChild(etherscan);

    li.dataset.found = element.found ? 'true' : 'false';

    return li;
};

window.toggleCode = async function toggleCode(e) {
    e && (e.preventDefault && e.preventDefault(true), e.stopPropagation && e.stopPropagation(true));
    var address = e.currentTarget.dataset.contract;
    var li = e.currentTarget.parentNode;
    var isToggle = li.getElementsByXPath('.//code').length > 0;
    var oldCode = document.getElementsByXPath('//code');
    oldCode = oldCode.length > 0 ? oldCode[0] : undefined;
    oldCode && oldCode.parentElement.removeChild(oldCode);
    if(isToggle) {
        return;
    }
    var code = document.createElement('code');
    var element = window.cache[address];
    code.innerHTML = (await window.loadContent(element.sourceLocationId, element.sourceLocation)).split(' ').join('&nbsp;').split('\n').join('<br/>');
    li.appendChild(code);
};

window.toggleLocalValidate = async function toggleLocalValidate(e) {
    e && (e.preventDefault && e.preventDefault(true), e.stopPropagation && e.stopPropagation(true));
    document.getElementById("validate").style.display = 'none' ;
    var address = e.currentTarget.dataset.contract;
    var li = e.currentTarget.parentNode;
    var isToggle = li.getElementsByXPath('.//section[@class="VALIDATE"]').length > 0;
    var oldSection = document.getElementsByXPath('//section[@class="VALIDATE"][not(@id="validate")]');
    oldSection = oldSection.length > 0 ? oldSection[0] : undefined;
    oldSection && oldSection.parentElement.removeChild(oldSection);
    if(isToggle) {
        return;
    }
    var section = document.createElement('section');
    section.className = 'VALIDATE';
    var element = window.cache[address];
    section.innerHTML = '<input type="file" accept=".sol" onchange="onFileSelection(this)"/><input type="submit" data-address="$address" value="Submit" onclick="save(this)"/>'.split('$address').join(address);
    li.appendChild(section);
};

window.tryFind = async function tryFind(element) {
    var code = await window.loadContent(element.sourceLocationId, element.sourceLocation);
    var compare = await window.SolidityUtilities.compare(element.contract, code);
    return compare !== undefined && compare !== null;
};

window.onFileSelection = function onFileSelection(fileInput) {
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        fileInput.dataset.lastResult = reader.result;
    }, false);
    reader.readAsDataURL(file);
};

window.search = function search(value) {
    window.searchTimeout && window.clearTimeout(window.searchTimeout);
    window.searchTimeout = window.setTimeout(function() {
        value = value === undefined || value === null || !window.isEthereumAddress(value) ? undefined : value.split(' ').join('');
        window.loadContracts(value);
    }, 900);
};

window.save = async function save(button) {
    try {
        var address = undefined;
        try {
            address = button.dataset.address || document.getElementById('address').value;   
        } catch(e) {
        }
        if(!window.isEthereumAddress(address)) {
            return alert("Please insert a valid Ethereum address");
        }
        if(window.cache[address] && window.cache[address].found) {
            return alert("This contract has a valid source already");
        }
        var file = undefined;
        try {
            file = button.parentNode.getElementsByXPath('.//input[@type="file"]')[0].dataset.lastResult;
        } catch(e) {
        }
        if(!file) {
            return alert("You must select a valid .sol file to continue");
        }
        var regex = new RegExp(window.base64Regex).exec(file);
        var code = regex && regex.index === 0 ? Base64.decode(file.substring(file.indexOf(',') + 1)) : file;
        var compare = await window.SolidityUtilities.compare(address, code);
        if(!compare) {
            return alert("Code and address don't match!");
        }
        var sourceLocationId = await window.mint(file);
        var data = window.web3.eth.abi.encodeParameters(['address','uint256','address','address','uint256'], [window.voidEthereumAddress, 0, address, window.getNetworkElement('defaultOcelotTokenAddress'), sourceLocationId]);
        await window.blockchainCall(window.dfoHub.dFO.methods.submit, "submitCode", data);
        window.cache[address] = {
            contract: address,
            sourceLocation: window.getNetworkElement('defaultOcelotTokenAddress'),
            sourceLocationId,
            found: true
        };
        window.saveCache();
        window.loadContract(window.cache[address]);
    } catch(e) {
        return alert(e.message || e);
    }
};

window.toggleGlobalValidate = function toggleGlobalValidate() {
    var validate = document.getElementById('validate');
    validate.style.display = validate.style.display !== 'none' ? 'none' : '';
    var oldSection = document.getElementsByXPath('//section[@class="VALIDATE"][not(@id="validate")]');
    oldSection = oldSection.length > 0 ? oldSection[0] : undefined;
    oldSection && oldSection.parentElement.removeChild(oldSection);
};
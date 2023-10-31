const { ethers } = require("hardhat");
require('dotenv').config();
exports.educationalRecordSystemConnector = async () => {
    try {
        const [owner] = await ethers.getSigners();

        const educationalRecordSystemAddress = "0xF1025Bb409c4d29e856B9178915F83a37324bb27"; 
      
        const abi = [
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "adharNumber",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "fullName",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "state",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "district",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "schoolOrCollege",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "year10",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "year12",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "engineeringYear",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "experience",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "experienceYear",
                  "type": "string"
                }
              ],
              "name": "RecordAdded",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "adharNumber",
                  "type": "uint256"
                }
              ],
              "name": "RecordDeleted",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "adharNumber",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "newEngineeringYear",
                  "type": "string"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "newDistrict",
                  "type": "string"
                }
              ],
              "name": "RecordUpdated",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_adharNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "_fullName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_state",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_district",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_schoolOrCollege",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_year10",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_year12",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_engineeringYear",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_experience",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_experienceYear",
                  "type": "string"
                }
              ],
              "name": "addRecord",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "admin",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_adharNumber",
                  "type": "uint256"
                }
              ],
              "name": "deleteRecord",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "recordIds",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "name": "records",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "adharNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "fullName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "state",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "district",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "schoolOrCollege",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "year10",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "year12",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "engineeringYear",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "experience",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "experienceYear",
                  "type": "string"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_adharNumber",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "_newEngineeringYear",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "_newDistrict",
                  "type": "string"
                }
              ],
              "name": "updateRecord",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ]
        const educationalRecordSystem = new ethers.Contract(educationalRecordSystemAddress, abi, owner);      
        return educationalRecordSystem;
    } catch (error) {
        console.log('Error initializing educationalRecordSystem contract:');
        // throw error; // Rethrow the error for proper handling in the calling code
    }
};

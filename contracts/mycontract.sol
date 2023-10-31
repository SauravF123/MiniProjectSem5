// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EducationalRecordSystem {
    address public admin;

    struct EducationalRecord {
        uint adharNumber;
        string fullName;
        string state;
        string district;
        string schoolOrCollege;
        string year10;
        string year12;
        string engineeringYear;
        string experience;
        string experienceYear;
    }
    
    mapping(uint => EducationalRecord) public records;
    uint[] public recordIds;

    event RecordAdded(
        uint adharNumber,
        string fullName,
        string state,
        string district,
        string schoolOrCollege,
        string year10,
        string year12,
        string engineeringYear,
        string experience,
        string experienceYear
    );
    
    event RecordUpdated(uint adharNumber, string newEngineeringYear, string newDistrict);
    event RecordDeleted(uint adharNumber);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can perform this operation.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function addRecord(
        uint _adharNumber,
        string memory _fullName,
        string memory _state,
        string memory _district,
        string memory _schoolOrCollege,
        string memory _year10,
        string memory _year12,
        string memory _engineeringYear,
        string memory _experience,
        string memory _experienceYear
    ) public onlyAdmin {
        EducationalRecord storage record = records[_adharNumber];
        require(record.adharNumber == 0, "Record already exists.");
        
        record.adharNumber = _adharNumber;
        record.fullName = _fullName;
        record.state = _state;
        record.district = _district;
        record.schoolOrCollege = _schoolOrCollege;
        record.year10 = _year10;
        record.year12 = _year12;
        record.engineeringYear = _engineeringYear;
        record.experience = _experience;
        record.experienceYear = _experienceYear;

        recordIds.push(_adharNumber);
        emit RecordAdded(
            _adharNumber,
            _fullName,
            _state,
            _district,
            _schoolOrCollege,
            _year10,
            _year12,
            _engineeringYear,
            _experience,
            _experienceYear
        );
    }

    function updateRecord(uint _adharNumber, string memory _newEngineeringYear, string memory _newDistrict) public onlyAdmin {
        EducationalRecord storage record = records[_adharNumber];
        require(record.adharNumber != 0, "Record does not exist.");
        
        record.engineeringYear = _newEngineeringYear;
        record.district = _newDistrict;
        emit RecordUpdated(_adharNumber, _newEngineeringYear, _newDistrict);
    }

    function deleteRecord(uint _adharNumber) public onlyAdmin {
        EducationalRecord storage record = records[_adharNumber];
        require(record.adharNumber != 0, "Record does not exist.");
        
        delete records[_adharNumber];
        emit RecordDeleted(_adharNumber);
    }
}

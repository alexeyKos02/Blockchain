pragma solidity ^0.8.0;

contract MyContract {
    struct MyStruct {
        uint256 id;
        string name;
        bool isActive;
        address userAddr;
    }
    mapping(uint256 => MyStruct) public items;
    function addItem(uint256 _id, string memory _name, bool _isActive, address _userAddr) public {
        items[_id] = MyStruct(_id, _name, _isActive, _userAddr);
        emit ItemAdded(_id, _name, _isActive, _userAddr);
    }
    function removeItem(uint256 _id) public {
        delete items[_id];
        emit ItemRemoved(_id);
    }
    event ItemAdded(uint256 indexed id, string name, bool isActive, address userAddr);
    event ItemRemoved(uint256 indexed id);
}

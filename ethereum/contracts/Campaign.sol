pragma solidity ^0.4.25;

contract CampaignFactory {
    Campaign[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (Campaign[] memory) {
        return deployedCampaigns;
    }
    
}

contract Campaign {
    // only creates a new type 
    // only when we create an instance will we create a new Request
    struct Request {
        string description;
        uint value;
        address recipient; 
        bool complete;
        uint approvalCount; 
        mapping(address => bool) approvals; 
    }
    
    // Example of storage data
    // state variables:
    Request[] public requests; 
    address public manager;
    uint public minimumContribution; 
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    // args to function and example of memory data 
    constructor(uint minimum, address creator) public { 
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string memory description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0 
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finaliseRequest(uint index) public restricted {
        Request storage request = requests[index]; // refers to a particular Request struct
        
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        
        request.recipient.transfer(request.value); 
        request.complete = true;
    }
    
    
}

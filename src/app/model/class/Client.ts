export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  contactNo: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  regNo: string;

  constructor() {
    this.clientId = 0;
    this.employeeStrength = 0;
    this.contactNo = '';
    this.companyName = '';
    this.contactPersonName = '';
    this.address = '';
    this.city = '';
    this.pincode = '';
    this.state = '';
    this.gstNo = '';
    this.regNo = '';
  }
}

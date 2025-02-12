export class Employee {
  //Fill in Values
  roleId: number;
  userName: string;
  empCode: string;
  empId: number;
  empName: string;
  empEmailId: string;
  empCity: string;
  empState: string;
  empAddress: string;

  //Default Filled Values
  empDesignationId: number;
  empContactNo: string;
  empAltContactNo: string;
  empPersonalEmailId: string;
  empExpTotalYear: number;
  empExpTotalMonth: number;
  empPinCode: string;
  empPerCity: string;
  empPerState: string;
  empPerPinCode: string;
  empPerAddress: string;
  password: string;
  ErpEmployeeSkills: any[];
  ErmEmpExperiences: any[];

  constructor() {
    this.roleId = 0;
    this.userName = "";
    this.empCode = "";
    this.empId = 0;
    this.empName = "";
    this.empEmailId = "";
    this.empCity = "";
    this.empState = "";
    this.empAddress = "";
    this.empPinCode = "";

    this.empDesignationId = 0;
    this.empContactNo = "N/A";
    this.empAltContactNo = "N/A";
    this.empPersonalEmailId = "N/A";
    this.empExpTotalYear = 0;
    this.empExpTotalMonth = 0;
    this.empPerCity = "Unknown";
    this.empPerState = "Unknown";
    this.empPerPinCode = "000000";
    this.empPerAddress = "Unknown";
    this.password = "defaultPassword";

    this.ErpEmployeeSkills = [
      {
        empSkillId: 0,
        empId: this.empId,
        skill: "Default Skill",
        totalYearExp: 0,
        lastVersionUsed: "None"
      }
    ];

    this.ErmEmpExperiences = [
      {
        empExpId: 0,
        empId: this.empId,
        companyName: "Default Company",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        designation: "Default Designation",
        projectsWorkedOn: "Default Project"
      }
    ];
  }
}


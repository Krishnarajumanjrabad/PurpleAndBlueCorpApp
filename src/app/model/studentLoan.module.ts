export class StudentLoan{
    loanAmt: number;
    intPaid: number;
    noOfYears: number;

    setStudentLoan(studentLoan: StudentLoan){
        this.loanAmt = studentLoan.loanAmt;
        this.intPaid = studentLoan.intPaid;
        this.noOfYears = studentLoan.noOfYears;
    }
}
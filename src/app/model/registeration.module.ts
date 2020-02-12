
import { CountryAndExpenditure } from './countryAndExp.module';
import { User } from './user.module';
import { Occupation } from './occupation.module';
import { MartialStatus } from './martiallStatus.module';
import { EducationAndSalary } from './educationAndSalary.module';
import { StudentLoan } from './studentLoan.module';
import { PersonalGoal } from './personalGoal.module';
export class Registeration {
    private userInfo: User;
    occupation: Occupation;
    martialStatus: MartialStatus;
    educationSal: EducationAndSalary;
    countryAndExp: CountryAndExpenditure;
    studentLoan: StudentLoan;
    peronalGoal: PersonalGoal;

    userInformation(userInfos: User) {
        this.userInfo = userInfos;
    }

    occupationAndSal(occup: Occupation) {
        this.occupation = occup;
    }

    martialContentStatus(martial: MartialStatus) {
        this.martialStatus = martial;
    }

    educationAndSal(edu: EducationAndSalary) {
        this.educationSal = edu;
    }

    countryAndExps(coun: CountryAndExpenditure) {
        this.countryAndExp = coun;
    }

    studentLoans(stu: StudentLoan) {
        this.studentLoan = stu;
    }

    personalGoals(per: PersonalGoal) {
        this.peronalGoal = per;
    }
}

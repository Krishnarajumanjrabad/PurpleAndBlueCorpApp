import { CountryAndExpediturePageModule } from './../countryandexpenditure/countryAndExpenditure.module';
export class CountryAndExpenditure {
    country: string;
    expenditure: number;

    setCountryAndExp(countryAndExp: CountryAndExpenditure) {
        this.country = countryAndExp.country;
        this.expenditure = countryAndExp.expenditure;
    }
}
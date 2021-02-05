import { loan } from "./loan";

export class User {
	
	phone: number;
	firstname: string;
	lastname: string;
	gender: string;
	dob: Date;
	address: string;
	email: string;
	aadhar: number;
	pan: string;
	password: string;
	acctype: number;
	userloan: loan[];
}

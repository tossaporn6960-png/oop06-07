class Employee {
    private _firstname: string;
    private _lastname: string;

    set fullname(name: string) {
        const [fname, lname] = name.split(/\s+/);
        this._firstname = fname;
        this._lastname = lname;
    }

    get fullname(): string {
        return `${this._firstname} ${this._lastname}`;
    }
}

const emp1 = new Employee();

emp1.fullname = "tossaporn Thanikkul";

console.log(emp1.fullname); 
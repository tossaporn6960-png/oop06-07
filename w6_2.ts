class WeatherStation {
    private _celsius: number;

    constructor(c: number) {
        this._celsius = c;
    }

    get celsius(): number {
        return this._celsius;
    }

    get fahrenheit(): number {
        return (this._celsius * 9 / 5) + 32;
    }

    set fahrenheit(f: number) {
        if (f < -459.67) {
            console.error("ค่าอุณหภูมิต้องไม่ต่ำกว่าค่าศูนย์สมบูรณ์");
            return;
        }

        this._celsius = (f - 32) * 5 / 9;
    }
}

const station1 = new WeatherStation(32);

console.log(
    `Celsius: ${station1.celsius} Fahrenheit: ${station1.fahrenheit}`
);

station1.fahrenheit = 200;

console.log(
    `Celsius: ${station1.celsius} Fahrenheit: ${station1.fahrenheit}`
);

station1.fahrenheit = -500;

console.log(
    `Celsius: ${station1.celsius} Fahrenheit: ${station1.fahrenheit}`
);
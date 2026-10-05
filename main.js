let c = console.log, r = Math.PI / 180;

let car1 = new Object();
Object.assign(car1, { color: "red", maxSpeed: 200, tuning: true, "number of accidents": 0, driver: { name: "Ivan", category: "C", "personal limitations": "No driving at night" }, drive: () => c("I am not driving at night") });

let car2 = { color: "blue", maxSpeed: 180, tuning: false, "number of accidents": 2, driver: { name: "Oleh", category: "B", "personal limitations": null }, drive: () => c("I can drive anytime") };

car1.drive(); car2.drive();

function Truck(col, w, sp, br, mod) { Object.assign(this, { color: col, weight: w, avgSpeed: sp, brand: br, model: mod }); }
Truck.prototype.AssignDriver = function(n, nd, e) { this.driver = { name: n, nightDriving: nd, experience: e }; };
Truck.prototype.trip = function() { this.driver ? c(`Driver ${this.driver.name} ${this.driver.nightDriving ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience`) : c("No driver assigned"); };

let t1 = new Truck("white", 3000, 90, "MAN", "TGL"); t1.AssignDriver("Igor", true, 5); t1.trip();
let t2 = new Truck("black", 5000, 80, "DAF", "XF"); t2.AssignDriver("Max", false, 10); t2.trip();

class Sq {
    constructor(a) { this.a = a; }
    static help() { c("Квадрат"); }
    length() { return 4 * this.a; }
    square() { return this.a ** 2; }
    info() { c(`a=${this.a}, P=${this.length()}, S=${this.square()}`); }
}
class Rect extends Sq {
    constructor(a, b) { super(a); this.b = b; }
    static help() { c("Прямокутник"); }
    length() { return 2 * (this.a + this.b); }
    square() { return this.a * this.b; }
    info() { c(`a=${this.a}, b=${this.b}, P=${this.length()}, S=${this.square()}`); }
}
class Rh extends Sq {
    constructor(a, al, be) { super(a); this.alpha = al; this.beta = be; }
    get a() { return this._a; } set a(v) { this._a = v; }
    get alpha() { return this._al; } set alpha(v) { this._al = v; }
    get beta() { return this._be; } set beta(v) { this._be = v; }
    static help() { c("Ромб"); }
    square() { return this.a ** 2 * Math.sin(this.alpha * r); }
    info() { c(`a=${this.a}, al=${this.alpha}, be=${this.beta}, P=${this.length()}, S=${this.square().toFixed(2)}`); }
}
class Pr extends Rect {
    constructor(a, b, al, be) { super(a, b); this.alpha = al; this.beta = be; }
    get a() { return this._a; } set a(v) { this._a = v; }
    get b() { return this._b; } set b(v) { this._b = v; }
    get alpha() { return this._al; } set alpha(v) { this._al = v; }
    get beta() { return this._be; } set beta(v) { this._be = v; }
    static help() { c("Паралелограм"); }
    square() { return this.a * this.b * Math.sin(this.alpha * r); }
    info() { c(`a=${this.a}, b=${this.b}, al=${this.alpha}, be=${this.beta}, P=${this.length()}, S=${this.square().toFixed(2)}`); }
}

Sq.help(); Rect.help(); Rh.help(); Pr.help();
new Sq(4).info(); new Rect(4, 6).info(); new Rh(5, 30, 150).info(); new Pr(4, 6, 30, 150).info();

let Triangular = (a = 3, b = 4, c = 5) => ({ a, b, c });
c(Triangular(), Triangular(6, 8, 10), Triangular(5, 12, 13));

let PiM = n => () => Math.PI * n;
c(PiM(2)(), PiM(2 / 3)(), PiM(0.5)());

let Pt = col => o => c(o?.type ? `${col}, ${o.type}` : "No 'type' property occurred!");
Pt("blue")({ maxSpeed: 280, type: "Sportcar", color: "magenta" });
Pt("red")({ type: "Truck", "avg speed": 90, "load capacity": 2400 });
Pt("yellow")({ maxSpeed: 180, color: "purple", isCar: true });
import add from "./modules/app.js";
import { def, data } from "./modules/def.js";
import calc from './modules/funcs.js'
console.log(add(10, 20));

console.log(def(10, 5));
console.log(data);
console.log(calc); // {mult: ƒ, division: ƒ} объект с двумя методами
console.log(calc.mult(5, 7));
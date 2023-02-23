import { suma, multiplica } from "./controller.js"
import chalk from "chalk"


const sum = suma(1, 2)
const mul = multiplica(4, 5)

console.log(sum)
console.log(chalk.green(mul))
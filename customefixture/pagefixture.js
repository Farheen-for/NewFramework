import{ test as base} from "@playwright/test"
import{Pagemanagers} from "../PageManager/managerpage.js"
export const test = base.extend({
    managerpage:async({page},use)=>{
        const pm = new Pagemanagers(page);
        await use(pm)
    }
})
export {expect} from "@playwright/test"
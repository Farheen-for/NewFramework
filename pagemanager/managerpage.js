import { Product } from "../pages/productpage.js";
import { Pos} from "../pages/pospage.js";
import { Login } from "../pages/LoginPage";
import { EditProducts } from "../pages/editproductpage";
import { Transaction } from "../pages/transactionpage.js";
export class Pagemanagers{
    constructor(page){
        this.productpage = new Product(page)
        this.pospage = new Pos(page)
        this.loginpage = new Login(page)
        this.editproductpage = new EditProducts(page)
        this.transactionpage = new Transaction(page)
       
    
    }
}
import { Injectable } from "@angular/core"
import { Product } from "./product.model"
import { Observable, from } from "rxjs"
import { Order } from "./order.model"

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
        new Product(2, "Product 2", "Category 2", "Product 2 (Category 2)", 200),
        new Product(3, "Product 3", "Category 1", "Product 3 (Category 1)", 50),
        new Product(4, "Product 4", "Category 1", "Product 4 (Category 1)", 10),
        new Product(5, "Product 5", "Category 2", "Product 5 (Category 2)", 200),
        new Product(6, "Product 6", "Category 2", "Product 6 (Category 2)", 100),
        new Product(7, "Product 7", "Category 2", "Product 7 (Category 2)", 350)
    ]
    getProducts():
        Observable<Product[]> {
        return from([this.products])
    }
    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order])
    }
}
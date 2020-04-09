import { Injectable } from "@angular/core"
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { StoreComponent } from "./store/store.component"

@Injectable()
export class StoreFirstGuard {
    private firtsNavigation = true;
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firtsNavigation) {
            this.firtsNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/")
                return false
            }
        }
        return true
    }
}
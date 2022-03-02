import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export function fakeRouterStateSnapshot(options: Partial<RouterStateSnapshot>) {
  return options as RouterStateSnapshot;
}

export function fakeActivatedRouteSnapshot(options: Partial<ActivatedRouteSnapshot>) {
  return options as ActivatedRouteSnapshot;
}

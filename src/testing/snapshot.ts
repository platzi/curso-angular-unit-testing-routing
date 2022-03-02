import { ActivatedRouteSnapshot, convertToParamMap, Params, RouterStateSnapshot } from "@angular/router";

export function fakeRouterStateSnapshot(options: Partial<RouterStateSnapshot>) {
  return options as RouterStateSnapshot;
}

export function fakeActivatedRouteSnapshot(options: Partial<ActivatedRouteSnapshot>) {
  return options as ActivatedRouteSnapshot;
}

export function fakeParamMap(params: Params = {}) {
  return convertToParamMap(params);
}

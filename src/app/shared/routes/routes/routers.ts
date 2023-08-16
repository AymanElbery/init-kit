import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "sample-page",
    loadChildren: () => import("../../../components/sample-page/sample-page.module").then((m) => m.SamplePageModule),
  },
  {
    path: "sample-page3",
    loadChildren: () => import("../../../components/sample-page3/sample-page3.module").then((m) => m.SamplePage3Module),
  },
];

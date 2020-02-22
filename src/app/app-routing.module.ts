import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/folder.module").then(m => m.FolderPageModule)
  },
  {
    path: "views/:id",
    loadChildren: () =>
      import("./views/folder.module").then(m => m.FolderPageModule)
  },
  {
    path: "pages/settings",
    loadChildren: () =>
      import("./pages/settings/settings.module").then(m => m.SettingsPageModule)
  },
  {
    path: "pages/todo",
    loadChildren: () =>
      import("./pages/todo/todo.module").then(m => m.TodoPageModule)
  },
  {
    path: "pages/vertretungsplan",
    loadChildren: () =>
      import("./pages/vertretungsplan/vertretungsplan.module").then(
        m => m.VertretungsplanPageModule
      )
  },
  {
    path: "pages/speiseplan",
    loadChildren: () =>
      import("./pages/speiseplan/speiseplan.module").then(
        m => m.SpeiseplanPageModule
      )
  },
  {
    path: "pages/about",
    loadChildren: () =>
      import("./pages/about/about.module").then(m => m.AboutPageModule)
  },
  {
    path: "pages/termine",
    loadChildren: () =>
      import("./pages/termine/termine.module").then(m => m.TerminePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

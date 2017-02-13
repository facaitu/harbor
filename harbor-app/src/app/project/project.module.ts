import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { ProjectDetailModule } from './project-detail/project-detail.module';

import { ProjectComponent } from './project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SearchProjectComponent } from './search-project/search-project.component';
import { FilterProjectComponent } from './filter-project/filter-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  imports: [ 
    SharedModule,
    ProjectDetailModule,
    ProjectRoutingModule
  ],
  declarations: [ 
    ProjectComponent,
    CreateProjectComponent,
    SearchProjectComponent,
    FilterProjectComponent,
    ListProjectComponent   
  ],
  exports: [ ListProjectComponent ]
})
export class ProjectModule {}
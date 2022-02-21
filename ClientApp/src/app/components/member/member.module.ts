import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDeleteComponent, MemberListComponent, MemberRolComponent,  } from '.';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { MembersRouting } from './members.routing';
import { MemberAddUpdateComponent } from './member-add-update/member-add-update.component';
import { FormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';


const COMPONENTS=[MemberDeleteComponent,MemberListComponent,MemberAddUpdateComponent,MemberRolComponent]
const MODULES=[CommonModule,SharedComponentsModule,MembersRouting,FormsModule,NgxLoadingModule]
@NgModule({
  imports: [MODULES],
  declarations: [COMPONENTS],
  exports:[COMPONENTS]

})
export class MemberModule { }

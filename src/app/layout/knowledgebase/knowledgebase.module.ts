import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';

import { KnowledgebaseComponent } from './knowledgebase.component';
import { KnowledgebaseRoutingModule } from './knowledgebase.routing';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { SearcharticleComponent } from './searcharticle/searcharticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ReadmorearticleComponent } from './readmorearticle/readmorearticle.component';
import { MyarticleComponent } from './myarticle/myarticle.component';

// third party plugin
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import {DialogModule} from 'primeng/dialog';
import { GrowlModule } from 'primeng/growl';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NgbDropdownModule,
        KnowledgebaseRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        RichTextEditorAllModule,
        DialogModule,
        GrowlModule
    ],
    declarations: [
        KnowledgebaseComponent,
        AddarticleComponent,
        SearcharticleComponent,
        EditarticleComponent,
        ReadmorearticleComponent,
        MyarticleComponent,
    ],

})
export class KnowledgebaseModule {}

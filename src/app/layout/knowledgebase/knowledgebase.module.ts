import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// import { LayoutRoutingModule } from './layout-routing.module';
// import { LayoutComponent } from './layout.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { KnowledgebaseRoutingModule } from './knowledgebase.routing';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ReactiveFormsModule,  FormsModule } from '@angular/forms';
import { SearcharticleComponent } from './searcharticle/searcharticle.component';
// import { EditarticleComponent } from './editarticle/editarticle.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { ReadmorearticleComponent } from './readmorearticle/readmorearticle.component';
import { MyarticleComponent } from './myarticle/myarticle.component';
@NgModule({
    imports: [
        CommonModule,
        // LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        KnowledgebaseRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        RichTextEditorAllModule
    ],
    declarations: [
        KnowledgebaseComponent,
        AddarticleComponent,
        SearcharticleComponent,
        // EditarticleComponent,
        ReadmorearticleComponent,
        MyarticleComponent
        // LayoutComponent,
        // SidebarComponent,
        // HeaderComponent
    ]
})
export class KnowledgebaseModule {}

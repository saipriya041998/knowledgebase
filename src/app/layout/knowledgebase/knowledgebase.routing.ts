import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
<<<<<<< HEAD
import { ReadmorearticleComponent } from './readmorearticle/readmorearticle.component';
=======
import { MyarticleComponent } from './myarticle/myarticle.component';
>>>>>>> a53c1673e3abb048b6b10ba98d943d491483dcba


const routes: Routes = [
    {
        path: '',
        component: KnowledgebaseComponent
    },
    {
        path: 'add',
        component: AddarticleComponent
    },
    {
        path: 'edit/:id',
        component: EditarticleComponent
    },
    {
<<<<<<< HEAD
        path: 'readmore/:id',
        component: ReadmorearticleComponent
=======
        path: 'myarticle',
        component: MyarticleComponent
>>>>>>> a53c1673e3abb048b6b10ba98d943d491483dcba
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KnowledgebaseRoutingModule {}

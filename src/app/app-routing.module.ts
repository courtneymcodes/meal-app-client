import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';

import { ShowRecipeComponent } from './generator/show-recipe/show-recipe.component';
import { GenerateComponent } from './generator/generate/generate.component';
import { CreateRecipeComponent } from './recipe/create-recipe/create-recipe.component';
import { CreateIngredientComponent } from './recipe/create-ingredient/create-ingredient.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account-home',
    component: AccountHomeComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailsComponent
  },
  {
    path: 'create-ingredient',
    component: CreateIngredientComponent
  },
  {
    path: 'generator',
    component: GenerateComponent,
    children: [
     {
      path:'show-random',
      component: ShowRecipeComponent
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

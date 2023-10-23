import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { GeneratorComponent } from './generator/generator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    AccountHomeComponent,
    ShoppingCartComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

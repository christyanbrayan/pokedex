import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokemonListComponent } from './views/body/pokemon-list/pokemon-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CardsComponent } from './views/body/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './views/footer/footer.component';
import { PokemonService } from './services/pokemon.service';
import { HeaderComponent } from './views/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonPokemonComponent } from './views/body/button-pokemon/button-pokemon.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeService } from './services/pipe.service';

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        CardsComponent,
        FooterComponent,
        HeaderComponent,
        ButtonPokemonComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        HttpClientModule,
        MatDialogModule,
        InfiniteScrollModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [PokemonService, PipeService],
    bootstrap: [AppComponent],
})

export class AppModule { }

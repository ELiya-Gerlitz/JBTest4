// CMD:
// ng new am_pm_store --skip-tests
// strictNullChecks : false
// "start": "ng serve --open",


// delete the following files:
// app.component.css
// app.component.html
// app.component.ts

// in the app Folder :
    // components       Folder
    // models           Folder
    // services         Folder
    // utils            Folder


// ng g c components/layout-area/
                    // ng g c components/layout-area/aside 
                    // ng g c components/layout-area/footer
                    // ng g c components/layout-area/header 
                    // ng g c components/layout-area/home 
                    // ng g c components/layout-area/layout 
                    // ng g c components/layout-area/page-not-found................ 


// ng g c components/products-area/products-list
                    // ng g c components/products-area/products-list
                    // ng g c components/products-area/product-card
                    // ng g c components/products-area/add-product
                    


// app-module : etc...
        // bootstrap: [LayoutComponent],
         // imports
        // exports: []
       

// in the index.html:
        {/* <app-layout></app-layout> */}


// app-routing.module: ... 
// app.module: ... 
        
    
// layout.html
// layout.css
// index.css


// aside

// Models - regular .ts  as in React

// List(the idea is a *ngFor="let p of products") (implements OnInit) +    // ng g s services/products  + //appConfig

// Card.        props:  
                // @Input()
                //   public product : ProductsModel

                // + in the List we added    :     <app-product-card *ngFor="let p of products" [product]="p"></app-product-card>   || These are the props we have defined in the CARD.ts!!:      [product]="p"
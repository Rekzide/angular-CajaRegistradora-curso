import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {
    this.arrComida = [
      new Producto('Cocido', 'https://t2.uc.ltmcdn.com/es/posts/2/3/7/como_hacer_cocido_madrileno_51732_orig.jpg', 10.50),
      new Producto('Paella', 'https://www.nestleprofessional-latam.com/sites/default/files/styles/np_recipe_detail/public/2022-07/paella.png?itok=CBvKkcsa', 12.20),
      new Producto('Cachopo', 'https://imag.bonviveur.com/cachopo-asturiano-de-ternera.jpg', 15.75),
      new Producto('Pizza', 'https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg', 7.80),
      new Producto('Pasta', 'https://t2.rg.ltmcdn.com/es/posts/9/4/5/pasta_al_pomodoro_75549_orig.jpg', 6.90),
      new Producto('Hamburguesa', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/640px-NCI_Visuals_Food_Hamburger.jpg', 5.75),
    ]

    this.arrBebida = [
      new Producto('Coca Cola', 'https://d1tjllbjmslitt.cloudfront.net/spree/products/36375/large_webp/8971600.webp?1641477356', 1.75),
      new Producto('Fanta', 'https://brindo.cl/15-thickbox_default/1x-fanta-lata-350cc.jpg', 1.65),
      new Producto('Agua', 'https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/agua.jpg', 1.50),
      new Producto('Cerveza', 'https://elbrindis.cl/wp-content/uploads/2020/12/Cerveza-Budweiser-355cc.jpg', 1.20),
    ]

    this.productosSeleccionados = [];

  }

  onProductoSeleccionado($event: any) {
    console.log($event);
    //this.productosSeleccionados.push($event);
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

    if (productoEncontrado) {
      productoEncontrado.cantidad++;
    } else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }

  }

}

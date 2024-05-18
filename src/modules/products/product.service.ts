import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProduct(): string {
    return 'GET LIST PRODUCTS';
  }

  createProduct(): string {
    return 'POST PRODUCT';
  }

  detailProduct(): string {
    return 'DETAIL PRODUCT';
  }

  updateProduct(): string {
    return 'UPDATE PRODUCT';
  }

  deleteProduct(): string {
    return 'DELETE PRODUCT';
  }
}

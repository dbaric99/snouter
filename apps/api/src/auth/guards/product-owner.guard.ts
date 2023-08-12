import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class ProductOwnerGuard implements CanActivate {
  constructor(private readonly productService: ProductsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const productId = request.params.id;
    const productsForUser = await this.productService.getProductsForUser(
      user.id,
    );

    const isSelling = [...productsForUser].find(
      (product) => +product.id === +productId,
    );

    return user && !!isSelling;
  }
}

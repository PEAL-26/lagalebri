import { Property as PropertyPrisma } from '@prisma/client';
import {
  Property as PropertyEntity,
  PropertyStateEnum,
} from '@/domain/entities/property';
import { toSnakeCase } from '@/helpers/converter-property-case';
import { Decimal } from '@prisma/client/runtime/library';
import { User } from '@/domain/entities/user';

export class PropertyPrismaMapper {
  static toPrisma(property: PropertyEntity): PropertyPrisma {
    return {
      id: property.id,
      userId: property.user.id,
      title: property.title,
      slug: property.slug,
      description: property.description,
      price: new Decimal(property.price),
      imageUrl: property.imageUrl,
      area: new Decimal(property.area),
      address: property.address,
      latitude: new Decimal(property.latitude),
      longitude: new Decimal(property.longitude),
      state: property.state,
      createAt: property.createdAt,
      updateAt: property.updatedAt,
    };
  }

  static toEntity(data: any) {
    return new PropertyEntity(
      {
        user: new User(data.user, data.user.id),
        title: data.title,
        slug: data.slug,
        description: data.description,
        price: parseFloat(data.price.toString()),
        imageUrl: data.imageUrl,
        area: parseFloat(data.area.toString()),
        address: data.address,
        latitude: parseFloat(data.latitude.toString()),
        longitude: parseFloat(data.longitude.toString()),
        state: data.state as PropertyStateEnum,
        createdAt: data.createAt,
        updatedAt: data.updateAt,
      },
      data.id,
    );
  }

  static toController(data: PropertyPrisma) {
    return toSnakeCase(data);
  }

  static toListPrismaController(data: any) {
    return {
      id: data.id,
      title: data.title,
      slug: data.slug,
      price: data.price,
      image_url: data.image_url,
      address: data.address,
      latitude: data.latitude,
      longitude: data.longitude,
      rating: parseFloat((data.rating || 0).toFixed(2)),
      views: parseInt(data.views.toString()),
    };
  }
}

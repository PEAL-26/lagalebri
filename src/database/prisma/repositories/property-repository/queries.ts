import { Injectable } from '@nestjs/common';
import {
  PaginationDataOutput,
  paginationData,
  setPagination,
} from '@/helpers/pagination';
import { PrismaService } from '@/database/prisma/prisma-service';
import { PropertyPrismaMapper } from '@/database/prisma/mappers';

import {
  PropertyRepositoryQueryAbstraction,
  ListQuery,
} from '@/domain/abstractions';
import { Property } from '@/domain/entities/property';
import { removeSpecialCharacters } from '@/helpers/characters';

type PropertyListType = {
  id: string;
  title: string;
  slug: string;
  price: number;
  image_url: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  views: number;
}[];

@Injectable()
export class PropertyQueriesRepository
  implements PropertyRepositoryQueryAbstraction
{
  constructor(private prisma: PrismaService) {}

  async list(props?: ListQuery) {
    const { query = '', page, size } = props ?? {};
    const { limit, offset } = setPagination({ page, size });

    const querySanitized = removeSpecialCharacters(query);

    const properties = await this.prisma.$queryRawUnsafe<PropertyListType>(`
      SELECT
        properties.id,
        properties.title,
        properties.slug,
        properties.price,
        properties.image_url,
        properties.address,
        properties.latitude,
        properties.longitude,
        AVG(ratings.stars) as rating,
        COUNT(views.id) as views
      FROM properties
      LEFT JOIN
        (
          SELECT
            property_id,
            AVG(stars) as stars
          FROM
            ratings
          GROUP BY
            property_id
        ) AS ratings
      ON
        properties.id = ratings.property_id
      LEFT JOIN
        views
      ON
        properties.id = views.property_id
      WHERE
        properties.title ILIKE '%${querySanitized}%'
      GROUP BY
        properties.id
      LIMIT ${limit}
      OFFSET ${offset}`);

    return paginationData({
      rows: properties,
      total: properties.length,
      limit,
      page,
    });
  }

  async listForMap(query?: ListQuery): Promise<PaginationDataOutput<any>> {
    const { query: q = '', page, size } = query ?? {};
    const { limit, offset } = setPagination({ page, size });

    const [total, properties] = await Promise.all([
      this.prisma.property.count({}),
      await this.prisma.property.findMany({
        select: { id: true, latitude: true, longitude: true, price: true },
        where: {},
        skip: offset,
        take: limit,
      }),
    ]);

    const rows = properties.map(PropertyPrismaMapper.toController);

    return paginationData({ rows, total, limit, page });
  }

  async getById(id: string): Promise<Property | null> {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    return property ? PropertyPrismaMapper.toEntity(property) : null;
  }

  async getByTitle(title: string): Promise<Property | null> {
    const property = await this.prisma.property.findFirst({
      where: {
        title: {
          equals: title,
          mode: 'insensitive',
        },
      },
    });

    return property ? PropertyPrismaMapper.toEntity(property) : null;
  }

  async getBySlug(slug: string): Promise<Property | null> {
    const property = await this.prisma.property.findUnique({
      where: {
        slug,
      },
    });

    return property ? PropertyPrismaMapper.toEntity(property) : null;
  }
}

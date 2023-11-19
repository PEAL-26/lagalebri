import { Injectable } from '@nestjs/common';
import { paginationData, setPagination } from '@/helpers/pagination';
import { PrismaService } from '@/database/prisma/prisma-service';
import { PropertyPrismaMapper } from '@/database/prisma/mappers';

// import { ListQuery, PropertyListData } from './types';
import {
  PropertyRepositoryQueryAbstraction,
  ListQuery,
} from '@/domain/use-cases/abstractions';
import { Property } from '@/domain/entities/property';

@Injectable()
export class PropertyQueriesRepository
  implements PropertyRepositoryQueryAbstraction
{
  constructor(private prisma: PrismaService) {}

  async list(props?: ListQuery) {
    const { query = '', page, size } = props ?? {};
    const { limit, offset } = setPagination({ page, size });

    const properties = await this.prisma.$queryRaw<any[]>`
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
      GROUP BY
        properties.id
      LIMIT ${limit}
      OFFSET ${offset}`;

    // WHERE
    //   properties.title ILIKE '%casa%'

    // const rows = properties.map(PropertyPrismaMapper.toListPrismaController);
    return paginationData({
      rows: properties,
      total: properties.length,
      limit,
      page,
    });
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
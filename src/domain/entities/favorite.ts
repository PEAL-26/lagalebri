import { Entity, EntityDateProps } from '@/shared/entity';

interface FavoriteProps extends Partial<EntityDateProps> {}

export class Favorite extends Entity {
  private props: FavoriteProps;

  constructor(props: FavoriteProps, id?: string) {
    super(id, props);

    this.props = {
      ...props,
    };

    this.validate();
  }

  validate(): void {}

  toController() {
    return {};
  }
}

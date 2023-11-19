import { Entity, EntityDateProps } from '@/shared/entity';

interface RatingProps extends Partial<EntityDateProps> {}

export class Rating extends Entity {
  private props: RatingProps;

  constructor(props: RatingProps, id?: string) {
    super(id, props);

    this.props = {
      ...props,
    };

    this.validate();
  }

  validate(): void {}
}

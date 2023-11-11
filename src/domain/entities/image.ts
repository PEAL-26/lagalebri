import { Entity, EntityDateProps } from '@/shared/entity';

interface ImageProps extends Partial<EntityDateProps> {}

export class Image extends Entity {
  private props: ImageProps;

  constructor(props: ImageProps, id?: string) {
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

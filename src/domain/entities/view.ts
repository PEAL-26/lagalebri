import { Entity, EntityDateProps } from '@/shared/entity';

interface ViewProps extends Partial<EntityDateProps> {}

export class View extends Entity {
  private props: ViewProps;

  constructor(props: ViewProps, id?: string) {
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

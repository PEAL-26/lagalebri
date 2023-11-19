import { Entity, EntityDateProps } from '@/shared/entity';

interface InteractionProps extends Partial<EntityDateProps> {}

export class Interaction extends Entity {
  private props: InteractionProps;

  constructor(props: InteractionProps, id?: string) {
    super(id, props);

    this.props = {
      ...props,
    };

    this.validate();
  }

  validate(): void {}
}

import { Entity, EntityDateProps } from '@/shared/entity';

interface CompartmentProps extends Partial<EntityDateProps> {
  name: string;
  quantity: number;
}

export class Compartment extends Entity {
  private props: CompartmentProps;

  constructor(props: CompartmentProps, id?: string) {
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

  public get name() {
    return this.props.name.trim();
  }

  public get quantity() {
    return this.props.quantity;
  }
}

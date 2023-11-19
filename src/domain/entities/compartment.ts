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

  validate(): void {
    if (this.props.name.trim() === '')
      this.addNotifications({
        property: 'Name',
        message: 'Campo Obrigatório!',
      });

    if (this.props.quantity < 1)
      this.addNotifications({
        property: 'Quantity',
        message: 'A quantidade deve ser maior que 0',
      });

    if (!Number.isInteger(this.props.quantity))
      this.addNotifications({
        property: 'Quantity',
        message: 'A quantidade deve ser um número inteiro [1-9]',
      });
  }

  public get name() {
    return this.props.name.trim();
  }

  public set name(name: string) {
    if (name.trim() === '')
      this.addNotifications({
        property: 'Name',
        message: 'Campo Obrigatório!',
      });

    if (this.isValid) this.props.name = name.trim();
  }

  public get quantity() {
    return this.props.quantity;
  }

  public set quantity(quantity: number) {
    if (quantity < 1)
      this.addNotifications({
        property: 'Quantity',
        message: 'A quantidade deve ser maior que 0',
      });

    if (!Number.isInteger(quantity))
      this.addNotifications({
        property: 'Quantity',
        message: 'A quantidade deve ser um número inteiro [1-9]',
      });

    if (this.isValid) this.props.quantity = quantity;
  }
}

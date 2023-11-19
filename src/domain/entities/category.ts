import { Entity, EntityDateProps } from '@/shared/entity';

interface CategoryProps extends Partial<EntityDateProps> {
  name: string;
  description?: string;
}

export class Category extends Entity {
  private props: CategoryProps;

  constructor(props: CategoryProps, id?: string) {
    super(id, props);

    this.props = {
      ...props,
    };

    this.validate();
  }

  validate(): void {
    if (this.props.name.trim() === '')
      this.addNotifications({
        property: 'name',
        message: 'Campo obrigatório.',
      });
  }

  public get name() {
    return this.props.name.trim();
  }

  public get description() {
    return this.props.description
      ? this.props.description.trim()
      : this.props.description;
  }
}

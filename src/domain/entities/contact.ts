import { Entity, EntityDateProps } from '@/shared/entity';

interface ContactProps extends Partial<EntityDateProps> {
  userId?: string;
  type: string;
  contact: string;
}

export class Contact extends Entity {
  private props: ContactProps;

  constructor(props: ContactProps, id?: string) {
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

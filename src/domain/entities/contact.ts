import { Entity, EntityDateProps } from '@/shared/entity';
import { User } from './user';

interface ContactProps extends Partial<EntityDateProps> {
  user: User;
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

  validate(): void {
    if (this.props.type.trim() === '')
      this.addNotifications({
        property: 'Contact.Type',
        message: 'Campo Obrigatório!',
      });

    if (this.props.contact.trim() === '')
      this.addNotifications({
        property: 'Contact.Contact',
        message: 'Campo Obrigatório!',
      });
  }

  public get user(): User {
    return this.props.user;
  }

  public get type(): string {
    return this.props.type.trim();
  }

  public get contact(): string {
    return this.props.contact.trim();
  }

  public set type(type: string) {
    if (type.trim() === '')
      this.addNotifications({
        property: 'Contact.Type',
        message: 'Campo Obrigatório!',
      });

    if (this.isValid) this.props.type = type.trim();
  }

  public set contact(contact: string) {
    if (contact.trim() === '')
      this.addNotifications({
        property: 'Contact.Contact',
        message: 'Campo Obrigatório!',
      });

    if (this.isValid) this.props.contact = contact.trim();
  }
}

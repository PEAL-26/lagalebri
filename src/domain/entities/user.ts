import { Replace } from '@/helpers/replace';
import { Entity, EntityDateProps } from '@/shared/entity';

import { View } from './view';
import { Rating } from './rating';
import { Contact } from './contact';
import { Property } from './property';

export enum UserTypeEnum {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL',
}

interface UserProps extends Partial<EntityDateProps> {
  email?: string | null;
  phone?: string | null;
  name: string;
  notification: boolean;
  avatar?: string;
  type: UserTypeEnum;
  favorites: Property[];
  ratings: Rating[];
  views: View[];
  contacts: Contact[];
}

interface UserReplaceProps {
  type?: UserTypeEnum;
  notification?: boolean;
  favorites?: Property[];
  ratings?: Rating[];
  views?: View[];
  contacts?: Contact[];
}

export class User extends Entity {
  private props: UserProps;

  constructor(props: Replace<UserProps, UserReplaceProps>, id?: string) {
    super(id, props);

    this.props = {
      type: props?.type || UserTypeEnum.NORMAL,
      notification: props?.notification || true,
      favorites: props?.favorites || [],
      ratings: props?.ratings || [],
      views: props?.views || [],
      contacts: props?.contacts || [],
      ...props,
    };

    this.validate();
  }

  validate(): void {
    if (!this.props.email?.trim() && !this.props.phone?.trim())
      this.addNotifications({
        property: 'Email | Phone',
        message: 'Tem que informar o Email ou Telefone.',
      });

    if (!this.props.name?.trim())
      this.addNotifications({
        property: 'Name',
        message: 'Campo Obrigatório!',
      });
  }

  public get email(): string | undefined | null {
    return this.props.email;
  }

  public set email(email: string | undefined | null) {
    this.props.email = email;
  }

  public get phone(): string | undefined | null {
    return this.props.phone;
  }

  public set phone(phone: string | undefined | null) {
    this.props.phone = phone;
  }

  public get type(): UserTypeEnum {
    return this.props.type;
  }

  public set type(type: UserTypeEnum) {
    this.props.type = type;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get notification(): boolean {
    return this.props.notification;
  }

  public get avatar(): string | undefined | null {
    return this.props.avatar;
  }

  public set avatar(avatar: string | undefined | null) {
    this.props.avatar = avatar;
  }

  public set notification(notification: boolean) {
    this.props.notification = notification;
  }

  public get favorites(): Property[] {
    return this.props.favorites;
  }

  public get ratings(): Rating[] {
    return this.props.ratings;
  }

  public get views(): View[] {
    return this.props.views;
  }

  public get contacts(): Contact[] {
    return this.props.contacts;
  }
}

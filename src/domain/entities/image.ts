import { Entity, EntityDateProps } from '@/shared/entity';

import { User } from './user';

interface ImageProps extends Partial<EntityDateProps> {
  user: User;
  url: string;
}

export class Image extends Entity {
  private props: ImageProps;

  constructor(props: ImageProps, id?: string) {
    super(id, props);

    this.props = {
      ...props,
    };

    this.validate();
  }

  validate(): void {
    if (this.props.url.trim() === '')
      this.addNotifications({
        property: 'Image.Url',
        message: 'Campo Obrigatório!',
      });
  }

  public get url(): string {
    return this.props.url.trim();
  }

  public set url(url: string) {
    if (url.trim() === '')
      this.addNotifications({
        property: 'Image.Url',
        message: 'Campo Obrigatório!',
      });

    if (this.isValid) this.props.url = url;
  }
}

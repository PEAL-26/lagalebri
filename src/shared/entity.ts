import { randomUUID } from 'node:crypto';
import { Notification } from './notification';

export interface EntityDateProps {
  createdAt?: Date;
  updatedAt?: Date;
}

export abstract class Entity extends Notification {
  private _id: string;
  private _dateProps: EntityDateProps;

  constructor(_id?: string, dateProps?: EntityDateProps) {
    super();

    this._id = _id || randomUUID();

    this._dateProps = {
      createdAt: dateProps?.createdAt || new Date(),
      updatedAt: dateProps?.updatedAt || new Date(),
    };
  }

  abstract validate(): void;

  public get id() {
    return this._id;
  }

  public get createdAt() {
    return this._dateProps.createdAt;
  }

  public get updatedAt() {
    return this._dateProps.updatedAt;
  }
}

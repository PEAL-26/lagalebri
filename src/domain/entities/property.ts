import { Replace } from '@/helpers/replace';
import { Entity, EntityDateProps } from '@/shared/entity';

import { View } from './view';
import { Image } from './image';
import { Rating } from './rating';
import { Contact } from './contact';
import { Category } from './category';
import { Favorite } from './favorite';
import { Compartment } from './compartment';
import { Interaction } from './interaction';

interface PropertyProps extends Partial<EntityDateProps> {
  title: string;
  slug: string;
  description?: string | null;
  price: number;
  imageUrl?: string | null;
  area: number;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  categories: Category[];
  favorites: Favorite[];
  rating: Rating[];
  images: Image[];
  views: View[];
  compartments: Compartment[];
  interactions: Interaction[];
  contacts: Contact[];
}

interface PropertyReplaceProps {
  slug?: string;
  categories?: Category[];
  favorites?: Favorite[];
  rating?: Rating[];
  images?: Image[];
  views?: View[];
  compartments?: Compartment[];
  interactions?: Interaction[];
  contacts?: Contact[];
}

interface CategoryProps {
  name: string;
  description?: string;
}

interface CompartmentProps {
  name: string;
  quantity: number;
}

interface ContactProps {
  userId?: string;
  type: string;
  contact: string;
}

export class Property extends Entity {
  private props: PropertyProps;

  constructor(
    props: Replace<PropertyProps, PropertyReplaceProps>,
    id?: string,
  ) {
    super(id, props);

    this.props = {
      slug: '',
      categories: [],
      favorites: [],
      rating: [],
      images: [],
      views: [],
      compartments: [],
      interactions: [],
      contacts: [],
      ...props,
    };

    this.validate();
  }

  validate(): void {}

  toController() {
    return {};
  }

  toPrisma() {
    return {};
  }

  public get title(): string {
    return this.props.title?.trim();
  }

  public get slug(): string {
    return this.props.slug?.trim();
  }

  public get description(): string | null | undefined {
    return this.props.description
      ? this.props.description.trim()
      : this.props.description;
  }

  public get price(): number {
    return this.props.price;
  }

  public get imageUrl() {
    return this.props.imageUrl
      ? this.props.imageUrl.trim()
      : this.props.imageUrl;
  }

  public get area() {
    return this.props.area;
  }

  public get address() {
    return this.props.address ? this.props.address.trim() : this.props.address;
  }

  public get latitude() {
    return this.props.latitude;
  }

  public get longitude() {
    return this.props.latitude;
  }

  public get categories() {
    return this.props.categories || [];
  }

  public addCategory(input: CategoryProps) {
    const category = new Category(input);

    if (!category.isValid) this.addNotifications(category.notifications);
    if (!this.props?.categories) this.props.categories = [];

    this.props.categories.push(category);
  }

  public get favorites() {
    return this.props.favorites || [];
  }

  public addFavorite() {
    // const category = new Category(input);
    // if (!category.isValid) this.addNotifications(category.notifications);
    // if (!this.props?.categories) this.props.categories = [];
    // this.props.categories.push(category);
  }

  public get rating() {
    return this.props.rating || [];
  }

  public get images() {
    return this.props.imageUrl || [];
  }

  public get views() {
    return this.props.views || [];
  }

  public get compartments() {
    return this.props.compartments || [];
  }

  public addCompartment(input: CompartmentProps) {
    const compartment = new Compartment(input);
    if (!compartment.isValid) this.addNotifications(compartment.notifications);
    if (!this.props?.compartments) this.props.compartments = [];
    this.props.compartments.push(compartment);
  }

  public get interactions() {
    return this.props.interactions || [];
  }

  public get contacts() {
    return this.props.contacts || [];
  }

  public addContact(input: ContactProps) {
    const contact = new Contact(input);
    if (!contact.isValid) this.addNotifications(contact.notifications);
    if (!this.props?.contacts) this.props.contacts = [];
    this.props.contacts.push(contact);
  }
}

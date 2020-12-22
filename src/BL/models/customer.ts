import { Searchable } from '../search';
import { AddressDto } from './address';
import { JobDto } from './job';

export interface CustomerDto {
  id: number;
  name: string;
  dateOfBirth: string;
  address: AddressDto;
  phone: string;
  username: string;
  email: string;
  avatar: string;
  job: JobDto;
  quote: string;
}

export class Customer implements CustomerDto, Searchable<string> {
  id: number;
  name: string;
  dateOfBirth: string;
  address: AddressDto;
  phone: string;
  username: string;
  email: string;
  avatar: string;
  job: JobDto;
  quote: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.dateOfBirth = '';
    this.address = {
      street: '',
      city: '',
      zipCode: '',
      country: ''
    };
    this.phone = '';
    this.username = '';
    this.email = '';
    this.avatar = '';
    this.job = {
      title: '',
      company: ''
    };
    this.quote = '';
  }

  isSatisfied(predicate: (value: string) => boolean): boolean {
    return this.getSearchableValues().some((value: string) => predicate(value));
  }

  private getSearchableValues(): string[] {
    return [this.name, this.job.title, this.job.company, this.quote];
  }
}

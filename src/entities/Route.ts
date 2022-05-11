import {generatePath} from 'react-router-dom';

const toMap = (array: string[]) => array.reduce((acc, key) => ({...acc, [key]: true}), {} as Record<string, boolean>);

export class Route<T extends Record<string, string | number>> {
  private readonly $searchKeys: Record<string, boolean>;

  static of<TT extends Record<string, string | number>>(path: string, searchKeys?: string[]) {
    return new Route<TT>(path, searchKeys);
  }

  constructor(private $path: string, searchKeys?: string[]) {
    this.$searchKeys = toMap(searchKeys || []);
  }

  public get path() {
    return this.$path;
  }

  public get<R extends T>(params?: R, search = '') {
    if (!params && !search) return this.$path;

    try {
      return generatePath(this.$path, params as Record<string, string>) + this.getSearch(search);
    } catch (e) {
      console.error(e);
      return '#';
    }
  }

  private getSearch(search: string) {
    if (!search.length) return '';

    const urlSearchParams = new URLSearchParams(search);
    const locationSearchKeys = Array.from(urlSearchParams.keys());

    locationSearchKeys.forEach((key) => {
      if (!this.$searchKeys[key]) urlSearchParams.delete(key);
    });

    const searchString = urlSearchParams.toString();
    if (!searchString.length) return '';
    return '?' + searchString;
  }
}

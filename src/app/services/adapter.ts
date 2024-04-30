export abstract class Adapter<S, T> {
  abstract adapt(item: S): T;

  adaptAll(items: S[]): T[] {
    return items.map((item) => this.adapt(item));
  }
}

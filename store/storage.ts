import { Store } from "./store.ts";

// In-memory store implementation
class InMemory implements Store {
  private store: Map<string, string>;

  constructor() {
    this.store = new Map<string, string>();
  }

  get(key: string): string | undefined {
    return this.store.get(key);
  }

  set(key: string, value: string): void {
    this.store.set(key, value);
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  has(key: string): boolean {
    return this.store.has(key);
  }

  entries(): IterableIterator<[string, string]> {
    return this.store.entries();
  }
}

// This is a mock implementation of a Redis key-value store.
class Redis implements Store {
  private store: Map<string, string>;

  constructor() {
    this.store = new Map<string, string>();
  }

  get(key: string): string | undefined {
    return this.store.get(key);
  }

  set(key: string, value: string): void {
    this.store.set(key, value);
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  has(key: string): boolean {
    return this.store.has(key);
  }

  entries(): IterableIterator<[string, string]> {
    return this.store.entries();
  }
}

// This is a mock implementation of a MongoDB
class MongoDB implements Store {
  private store: Map<string, string>;

  constructor() {
    this.store = new Map<string, string>();
  }

  get(key: string): string | undefined {
    return this.store.get(key);
  }

  set(key: string, value: string): void {
    this.store.set(key, value);
  }

  delete(key: string): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }

  has(key: string): boolean {
    return this.store.has(key);
  }

  entries(): IterableIterator<[string, string]> {
    return this.store.entries();
  }
}

export { InMemory, MongoDB, Redis };
export type { Store };

import { InMemory } from "./storage.ts";

interface Store {
  get(key: string): string | undefined;
  set(key: string, value: string): void;
  delete(key: string): void;
  clear(): void;
  has(key: string): boolean;
  entries(): IterableIterator<[string, string]>;
}

// You can replace InMemory with any other storage implementation
const urlStore = new InMemory();
const userStore = new InMemory();

export { urlStore, userStore };
export type { Store };

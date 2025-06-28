type DataStore = {
  [prop: string]: number | boolean;
};

let someObj: Record<string, number | boolean>;

let store: DataStore = {};

//...

store.id = 5;
store.isOpen = false;

let roles = ["admin", "guest", "editor"] as const;

const dataEntries = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

//...

// dataEntries.entry3 = 5;

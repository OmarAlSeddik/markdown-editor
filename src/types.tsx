type Document = {
  name: string;
  date: string;
  content: string;
};

type User = {
  uid: string;
  documents: Document[];
};

export type { Document, User };

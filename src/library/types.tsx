type Document = {
  id: number;
  dateNum: number;
  dateStr: string;
  name: string;
  content: string;
};

type User = {
  uid: string;
  documents: Document[];
};

export type { Document, User };

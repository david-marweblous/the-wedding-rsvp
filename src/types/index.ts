export interface IInviteLink {
  partyId: string;
  guest: string;
  inviteLink: string;
}

export interface IGuest {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  name: string;
  surname: string;
  rsvp?: Date;
  message?: string;
}

export interface IParty {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  guests: IGuest[];
}

const apiKey =
  '22716c2ba85c4ac04223310d4bbed5630944324a856ad62f184c4c9800233a09238c4699a0883dcdb65976bc99f663ef2a9d0c175a2d41a738de742dda09b7a3240126bcfb487898a3cd0d737e7bc0fdf3db73b4f238fe9e6c6e9dd21181bc1df0a02355f418d6c45a07d66c442d2f82c5b8c747465c435de60f604cf3fca225';

interface IGuest {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  name: string;
  surname: string;
  rsvp?: boolean;
  message?: string;
}

interface IParty {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  guests: IGuest[];
}

interface InviteLink {
  partyId: string;
  guest: string;
  inviteLink: string;
}

const main = async () => {
  const partyResponse = await fetch('http://localhost:1337/api/parties?populate=*', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });
  const partyData = await partyResponse.json();

  console.log('partyData:', JSON.stringify(partyData, null, 2));

  const links: InviteLink[] = [];
  partyData.data.forEach((party: IParty) =>
    links.push({
      partyId: party.documentId,
      guest: `${party.guests[0].name} ${party.guests[0].surname}`,
      inviteLink: `https://weddingURL.com?invite=${party.documentId}`
    })
  );

  console.log('Invite Links: ', links);
};

main();

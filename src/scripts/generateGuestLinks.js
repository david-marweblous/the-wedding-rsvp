const apiKey =
  'c359b916042b605b9208a5cd996d58b87e3d8df1eadf721aaab0108f3e523bbcb4ea2ba0a1feafb0321d2d98ceb636ad6c631294d2af0b4ab673aa60e6b1327298c20a3feb9586b6ce877f25f93c28f1d060df4dc328e467de709a3dcc9ebf660d517db5e4d4cc0d141329f062b87f8292f6d9ed3af3ab9db00996de063f4181';

const main = async () => {
  const partyResponse = await fetch('http://localhost:1337/api/parties?populate=*', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  });
  const partyData = await partyResponse.json();

  const links = [];
  partyData.data.forEach(party =>
    links.push({
      partyId: party.documentId,
      guest: `${party.guests[0].name} ${party.guests[0].surname}`,
      inviteLink: `https://davidandrebecaswedding.com?invite=${party.documentId}`
    })
  );

  console.log('Invite Links: ', links);
};

main();

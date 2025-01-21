interface RSVPHeroProps {
  names: string[];
}

export const RSVPHero: React.FC<RSVPHeroProps> = ({ names }) => {
  return (
    <div className="">
      <h1>Welcome</h1>
      <p>{names}</p>
    </div>
  );
};

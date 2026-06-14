import { useParams } from 'react-router';

export const CharacterInfo = () => {
  const { id } = useParams();

  return (
    <section>
      <h1>Персонаж {id}</h1>
    </section>
  );
};

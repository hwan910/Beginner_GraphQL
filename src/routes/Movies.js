import { gql, useQuery } from "@apollo/client";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>앗! 잠시만요..</h1>;
  }
  if (error) {
    return <h1>에러 발생</h1>;
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default Movies;
